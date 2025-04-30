# Process

## Concept

Tools:

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/120px-ChatGPT-Logo.svg.png" alt="ChatGPT Logo" height="100"> [ChatGPT](https://chat.openai.com/)

<img src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/claude-color.png" alt="Claude Logo" height="100"> [Claude](https://www.anthropic.com/index/claude)

### Develop briefing

```
Create a product briefing for a web app that is [your idea].
include target group, user journey, core functionalities, aesthetics and interface elements
```

> The stronger and specific your own input is, the better the result fit to your idea. Sometimes its also interesting to give very little context so see what happens though.

### Refine & reduce concept to MVP

```
Based on this briefing, develop a concept for an MVP that focusses on the most relevant features and functionality. get rid of functionality that is too complex to implement in a first step or is more nice to have / quality of life
Dont mention tech stack consideration since this will be defined later
```

### Boiling things down

Sometimes it makes sense to boil it down even further

```
simplify the concept even further
```

### Styleguide

```
Describe the overall style of the app. It should be specifically for the target group mentioned. Mention visual identity, colors, typography, shapes and the overall user experience.
```

## Initial Draft

### Tools

<img src="https://avatars.githubusercontent.com/u/160515846?s=200&v=4" alt="Lovable Logo" height="100"> [Lovable](https://lovable.tools/)  
<img src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/v0.png" alt="v0.dev Logo" height="100"> [v0.dev](https://v0.dev/)

Give the model as much context as possible. Basically paste your whole concept and style guide into the chat.

```
Develop a web app based on the concept below:
{your concept here}
```

## Further refinement

### Tools

<img src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/cursor.png" alt="Cursor Logo" height="100"> [Cursor](https://www.cursor.so/)  
<img src="https://exafunction.github.io/public/images/ides/windsurf-logo.svg" alt="Windsurf Logo" height="100"> [Windsurf](https://windsurf.tools/)

Download the codebase to your computer and open in Cursor

![[Pasted image 20250430180219.png]]

Usually its enough to run (line by line):

```bash
npm install
npm dev
```

`npm install` installs all the relevant plugins and dependencies  
`npm dev` starts a local development server (before this was called `npm start`)
