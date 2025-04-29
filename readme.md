# Summer Semester 25: "Vibe Coding"

![cover](/assets/cover.png)

This guide will help you get set up quickly with all the necessary tools and code to start working on your assignments.

## Contents

- [Summer Semester 25: "Vibe Coding"](#summer-semester-25-vibe-coding)

**2. Getting Started**

- [Download the Repository](#1-download-the-repository)
- [Install Required Tools](#2-install-required-tools)
- [Project Setup](#3-project-setup)

**3. Platform-Specific Information**

- [Windows-Specific Notes](#windows-specific-notes)

**4. Documentation**

- [Project Structure](#documentation)
- [Working with Cursor](#when-working-with-cursor)
- [Working with External AI Tools](#when-working-with-ai-tools-outside-of-the-editor-like-chatgpt)

**5. Resources**

- [AI Tools](#ai-tools)
- [Specific Technologies](#spezifisch)
- [General Resources](#general)

## Getting Started

### 1. Download the Repository

```bash
# Clone the repository using git
git clone git@github.com:max-hans/25-vibe-coding-course-material.git

# Navigate to the project directory
cd student-repo
```

If you don't have Git installed, you can also download the ZIP file by:

1. Going to the repository page
2. Clicking the green "Code" button
3. Selecting "Download ZIP"
4. Extracting the ZIP file to your preferred location

### 2. Install Required Tools

#### Open Terminal

##### macOS

```
Programme -> Dienstprogramme -> Terminal
```

Windows

```
Windowssuche -> "PowerShell"
```

#### Bun Installation

Bun is our JavaScript runtime and package manager.


**Install NodeJS**

https://nodejs.org/en/download
-> Installer runterladen und installieren

**For macOS/Linux:**

```bash
curl -fsSL https://bun.sh/install | bash
```

**For Windows:**
First, ensure you have Windows Subsystem for Linux (WSL) installed:

1. Open PowerShell as Administrator
2. Run: `wsl --install`
3. Restart your computer
4. Open WSL terminal and run: `curl -fsSL https://bun.sh/install | bash`

->  Use the new Terminal from the Windows App Store -> https://apps.microsoft.com/detail/9n0dx20hk701?hl=de-de&gl=US

#### Cursor Installation

Cursor is an AI-powered code editor that will help with your projects.

1. Visit [cursor.sh](https://cursor.sh)
2. Download the appropriate version for your operating system
3. Follow the installation instructions
4. Create a Trial Account

### 3. Project Setup

#### Todo-App

```bash
# Open the folder "01-todo" with cursor
# Open new Terminal

# Enter:

# Install dependencies
bun install

# Run development server
bun start

# This might take a second to load
```

## Windows-Specific Notes

If you encounter any issues on Windows:

- Make sure WSL is properly configured
- Use Git Bash instead of Command Prompt for git operations
- Check that your antivirus isn't blocking any installations
- For path issues, use forward slashes `/` instead of backslashes `\`

## Documentation

The projects structure is documented in [01-todo/instructions.txt](01-todo/instructions.txt) to give models the context they need.

### When working with cursor…

…point it at the file using the `@` symbol in the chat.

### When working with AI tools outside of the editor (like ChatGPT)…

…copy paste the contents at the beginning of your chat.

## Resources

### AI Tools

- Cursor [https://www.cursor.com/](https://www.cursor.com/)
- Lovable [https://lovable.dev/](https://lovable.dev/)
- v0 [https://v0.dev/](https://v0.dev/)

### Spezifisch

- TailwindCSS: [https://tailwindcss.com/](https://tailwindcss.com/)
- DaisyUI: [https://daisyui.com/](https://tailwindcss.com/)

### General

- MDN Web Docs: [https://developer.mozilla.org](https://tailwindcss.com/)
- W3Schools: [https://www.w3schools.com](https://tailwindcss.com/)
- CSS-Tricks: [https://css-tricks.com](https://tailwindcss.com/)
