# Issues

1. Build a home page

    ```md
    - [ ] Create a header with navigation
    - [ ] Include the UC logo in the header with the site title
    - [ ] Create a footer with the message "Developed by students, faculty, and alumni at the Information Technology Solutions Center"
    - [ ] Create a section with an embedded live stream from YouTube
    - [ ] Create a section with a mock schedule for the event
    ```

2. Build a project list page

    ```md
    - [ ] Create a page for each project type to list the projects
      - [ ] DevOps
      - [ ] OCAT
      - [ ] VEaaS
      - [ ] CECH Web
    - [ ] For each project type, display each project by the name of the person working on it. Find a way to make this look better than just a list of links.

    You do not need to get the actual information about each project and who is working on it. Just make some fake names of people.
    An example of this page is the [IT EXPO 20 Seniors Page](https://itexpo20.live/seniors)
    ```

3. Create a template page to showcase each project

    ```md
    - [ ] Create a page that receives JSON data and then populates the template page with the required information. There might be a different template page for each project type, but there doesn't have to be
      - [ ] DevOps
      - [ ] OCAT
      - [ ] VEaaS
      - [ ] CECH Web
    - [ ] Create a section to describe the project
    - [ ] Create a section that includes the name of the person working on the project
    - [ ] Create a section for a YouTube video embed of the person working on the project explaining the project (use any placeholder video for now)

    You do not need to get the actual information about each project and who is working on it. Just make a fake description and some fake names of people.
    I like to use [https://loremipsum.io/](https://loremipsum.io/) for example text.
    An example of this page is [IT EXPO 20 Senior Detail Page](https://itexpo20.live/seniors/11)
    ```

4. Publish the site to Netlify

    ```md
    - [ ] Create a netlify account
    - [ ] Login to netlify on your command line
    - [ ] Deploy your site to netlify
    - [ ] Comment the link to the netlify site on this issue
    ```

5. Prepare presentation

    ```md
    - [ ] Prepare your presentation
    ```

6. Integrate live chat

    ```md
    * Recommend using [Disqus](https://disqus.com/)
    * There is a React wrapper for Disqus that makes it very easy to implement called [Disqus-React](https://www.npmjs.com/package/disqus-react)
    - [ ] Add a live discussion to each project page that is separate from the other project pages (i.e. commenting on one project only shows on the one project)
    - [ ] Ensure that new comments show up without refreshing the page
    ```

7. Implement an event countdown

    ```md
    - [ ] Create a countdown timer on the home page that counts down to the start of the event
    - [ ] Use that timer to prevent users from accessing the project pages until the countdown is complete
    ```

8. Add a pre-event video

    ```md
    - [ ] Use the countdown timer to change the live stream to a static video until the the event starts
    ```
