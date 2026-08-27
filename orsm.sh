#!/bin/bash

PROJECT="$HOME/projects/orsm"
VENV="$PROJECT/.venv"
BACKUPS="$PROJECT/backups"

cd "$PROJECT" || exit 1

pause() {
    echo
    read -p "Press Enter to continue..."
}

header() {
    clear
    echo "========================================"
    echo "        ORSM Project Manager"
    echo "========================================"
    echo
}

activate_venv() {
    if [ -f "$VENV/bin/activate" ]; then
        source "$VENV/bin/activate"
    else
        echo "ERROR: ORSM Python environment not found."
        echo "$VENV"
        return 1
    fi
}

while true
do
    header

    echo "1. Start local ORSM website"
    echo "2. Build / validate website"
    echo "3. Check Git status"
    echo "4. Save changes to Git"
    echo "5. Save changes and publish to GitHub"
    echo "6. Show project locations"
    echo "7. Create project backup"
    echo "8. Publication readiness check"
    echo "9. Exit"
    echo

    read -p "Choose an option: " choice

    case $choice in

    1)
        header
        echo "Starting ORSM..."
        echo
        echo "Website:"
        echo "http://127.0.0.1:8000"
        echo

        activate_venv || {
            pause
            continue
        }

        # Stop old MkDocs instance if one exists
        pkill -f "mkdocs serve" 2>/dev/null || true
        sleep 1

        mkdocs serve
        ;;

    2)
        header
        echo "Building and validating ORSM..."
        echo

        activate_venv || {
            pause
            continue
        }

        if mkdocs build --strict; then
            echo
            echo "✓ ORSM build successful."
        else
            echo
            echo "✗ Build found a problem."
            echo "Nothing has been published."
        fi

        pause
        ;;

    3)
        header
        echo "ORSM Git status"
        echo "----------------------------------------"
        git status
        pause
        ;;

    4)
        header

        echo "First validating ORSM..."
        echo

        activate_venv || {
            pause
            continue
        }

        if ! mkdocs build --strict; then
            echo
            echo "✗ Build failed."
            echo "Changes have NOT been committed."
            pause
            continue
        fi

        echo
        git status --short
        echo

        read -p "Describe the changes: " MESSAGE

        if [ -z "$MESSAGE" ]; then
            echo
            echo "No description entered. Nothing saved."
            pause
            continue
        fi

        git add .
        git commit -m "$MESSAGE"

        echo
        echo "✓ Changes saved locally in Git."
        echo "They have NOT been pushed to GitHub."

        pause
        ;;

    5)
        header

        echo "========================================"
        echo " ORSM Publish to GitHub"
        echo "========================================"
        echo

        activate_venv || {
            pause
            continue
        }

        echo "Running validation first..."
        echo

        if ! mkdocs build --strict; then
            echo
            echo "✗ ORSM failed validation."
            echo "Publication cancelled."
            pause
            continue
        fi

        echo
        echo "Current changes:"
        echo
        git status --short
        echo

        if git diff --quiet && git diff --cached --quiet; then
            echo "No uncommitted changes detected."
            echo
            read -p "Push existing commits to GitHub? (y/N): " PUSHONLY

            if [[ "$PUSHONLY" =~ ^[Yy]$ ]]; then
                git push
                echo
                echo "✓ GitHub updated."
            else
                echo "Nothing published."
            fi

            pause
            continue
        fi

        read -p "Describe this update: " MESSAGE

        if [ -z "$MESSAGE" ]; then
            echo
            echo "No description entered."
            echo "Publication cancelled."
            pause
            continue
        fi

        echo
        echo "About to:"
        echo
        echo "  ✓ validate ORSM"
        echo "  ✓ add changed files"
        echo "  ✓ create a Git commit"
        echo "  ✓ push to GitHub"
        echo

        read -p "Publish these changes? (y/N): " CONFIRM

        if [[ ! "$CONFIRM" =~ ^[Yy]$ ]]; then
            echo
            echo "Publication cancelled."
            pause
            continue
        fi

        git add .
        git commit -m "$MESSAGE"
        git push

        echo
        echo "========================================"
        echo " ✓ ORSM published successfully"
        echo "========================================"

        pause
        ;;

    6)
        header

        echo "ORSM project:"
        echo "$PROJECT"
        echo

        echo "Main configuration:"
        echo "$PROJECT/mkdocs.yml"
        echo

        echo "Website content:"
        echo "$PROJECT/docs"
        echo

        echo "Homepage:"
        echo "$PROJECT/docs/index.md"
        echo

        echo "Styles:"
        echo "$PROJECT/docs/stylesheets/extra.css"
        echo

        echo "Local website:"
        echo "http://127.0.0.1:8000"

        pause
        ;;

    7)
        header

        mkdir -p "$BACKUPS"

        STAMP=$(date +%Y%m%d-%H%M%S)
        BACKUP="$BACKUPS/orsm-$STAMP.tar.gz"

        echo "Creating ORSM backup..."
        echo

        tar \
          --exclude='./.venv' \
          --exclude='./site' \
          --exclude='./backups' \
          -czf "$BACKUP" .

        echo "✓ Backup created:"
        echo "$BACKUP"

        pause
        ;;

    8)
        header

        echo "ORSM Publication Readiness"
        echo "----------------------------------------"
        echo

        check_file() {
            if [ -f "$1" ]; then
                echo "✓ $1"
            else
                echo "! Missing: $1"
            fi
        }

        check_file "README.md"
        check_file "LICENSE"
        check_file ".gitignore"
        check_file "mkdocs.yml"
        check_file "docs/index.md"

        echo
        echo "Checking Git remote..."
        git remote -v

        echo
        echo "Checking repository status..."
        git status --short

        echo
        echo "Checking website build..."

        activate_venv

        if mkdocs build --strict; then
            echo
            echo "✓ Website builds successfully."
        else
            echo
            echo "✗ Website validation failed."
        fi

        echo
        echo "Manual checks still required:"
        echo
        echo "  [ ] No customer/project names"
        echo "  [ ] No sensitive architecture information"
        echo "  [ ] No passwords, tokens or API keys"
        echo "  [ ] Disclaimer present"
        echo "  [ ] Copyright notice present"
        echo "  [ ] Public Draft status visible"
        echo "  [ ] Licence confirmed"

        pause
        ;;

    9)
        echo
        echo "Goodbye."
        exit 0
        ;;

    *)
        echo
        echo "Please choose 1-9."
        sleep 1
        ;;

    esac
done
