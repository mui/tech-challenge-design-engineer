# Design Engineer technical challenge @ MUI

This challenge is part of the hiring process for some positions at MUI.
The idea is to make as much progress as possible under a given time constraint (3-4 hours).

## Why are we doing this?

At MUI, you'll frequently flesh out product requirements, turning them into implementations that take into account great design & code standards.
This challenge aims at simulating how a potential day-to-day situation plays out.
We'll review how you make design decisions and the quality of the written code.

## Context about MUI

MUI's objective is to become the UI toolkit for React developers.
We're unifying the fragmented ecosystem of dependencies into a single set of simple, beautiful, consistent, and accessible React components.

Our mission is, ultimately, to make building great UIs and web apps a breeze ⎯ quicker, simpler, and accessible to more people.
At the end of the day, it's about [_writing less code_](https://youtu.be/GnO7D5UaDig?t=2451).

Head over to [our company Handbook](https://mui-org.notion.site/Why-MUI-d8b8c142a6a44e3aa963f26edf4e03db) to learn more!

## Challenge

Given that the Design Engineer position sits right at the intersection between engineering and design, this challenge is tailored to demonstrate your skills in both areas.
Our challenge is to **develop a stacked Snackbar** component.

Here's a reference design:

<img alt="Snackbars example design" src="./public/snackbar-reference.gif" width="465" height="392" />

Note that it's only an example.
We encourage you to add your creative spin to the design; we want to see your design taste!

## Requirements

- **Stack:** Use Base UI's [`UnstyledSnackbar`](https://mui.com/base/react-snackbar/) component or another headless component library as its foundation.
- **Interactivity:**
  - The other Snackbar instances should be visible after some interaction, either clicking a button or hovering the stack.
  - They should be kept open if the focus is inside them. Conversely, they should collapse as the focus moves out of it.
  - Closing them should be possible by clicking on a close button.
  - _Bonus:_ adding an option to close it after some configurable time interval. It should still be compatible with [WCAG 2.2.1](https://www.w3.org/TR/WCAG21/#enough-time).
- **Transitions:** the Snackbars should appear and disappear gracefully on the screen, using an animation.
- **Dark mode:** make sure to support light and dark modes.

## Work environment

To save you time, we created a working environment with Next.js, Typescript, eslint, and others, that you should install.
Follow the steps:

- Clone the repo: `git clone git@github.com:mui/tech-challenge-design-engineer.git`
- Install the dependencies: `yarn`
- Start Next.js: `yarn dev`
- Open http://0.0.0.0:3002/

## Submission instructions

- **DO NOT** host your project on a public repository.
- Please send us a .zip file containing this project using the upload link we provided by email (**with** the _.git_ folder).
- To significantly reduce the size of the file, remove the `/_node_modules_/` and `/.next/` folders.
- If you don't have the upload link, send it to job@mui.com.

We're excited and looking forward to seeing what you'll create!
Good luck 🚀
