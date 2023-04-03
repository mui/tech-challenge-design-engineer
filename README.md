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

## Challenge summary

Given that the Design Engineer position sits right at the intersection between engineering and design, this challenge was tailored to elevate your skills in both areas.
Our challenge is to **develop a stacked Snackbar** component.

Here's a reference design:

![Snackbars example design](public/snackbar-reference.gif)

Note that's just an example, definitely feel encouraged to add your own creative spin to the design, we want to see your design taste!
We do have a few requirements, though:

- **Stack:** use MUI Base’s [`UnstyledSnackbar`](https://mui.com/base/react-snackbar/) component or even other headless/unstyled component libraries as the foundation for it.
- **Interactivity:**
  - The other Snackbar instances should be visible after some interaction, either clicking a button or hovering the stack.
  - They should be kept open if the focus is inside them. Conversely, they should collapse as the focus moves out of it.
  - There should be the possibility to close them by clicking on a close button.
  - _Bonus:_ adding an option for it to be closed after some configurable time interval.
- **Transitions:** the Snackbars should appear and disappear gracefully on the screen, using an animation.
- **Dark mode:** make sure to support light and dark modes.

## Submission

Instructions:

- **DO NOT** host your project on a public repository.
- Please send us a .zip file containing this project using the upload link that we have provided by email (**with** the _.git_ folder).
- To significantly reduce the size of the archive, you can remove the `/_node_modules_/` and `/docs/.next/` folders.
- If you don't have the upload link, you can simply send it to job@mui.com.

We're excited and looking forward to seeing what you'll create!
Good luck 🚀
