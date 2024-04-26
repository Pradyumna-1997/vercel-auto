This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install all the dependencies listed in `package.json` and run `npm run build` to initialise. Use `npm run dev` to have a automatically refreshing websit in local host.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Most complicated codes have a comment at the start of `return` to explain its functionality

## Imaportant Project Structure

This is the most important part of the Readme and contains information on how project is structured as follows:

- `app/`: This is the main directory where all the source code of the project resides.
  - `layout.tsx`: main layout file where `Navbar.tsx` is sticky in top and `Footer.tsx` is sticky at bottom
  - `page.tsx`: main code for main page (`www.automovill.com`) 
  - `global.css`: contains all the custom classnames and buttons that are required for the code

  - `Services`: This folder has `www.automovill.com/Servcies` website links
    - `page.tsx`: This is the main file for the services page. It imports and uses the other components in the Services directory to create the page layout. `ServiceSelect.tsx` is the main code being imported that calls the other components.
    - `ServiceSelect.tsx`: This component is responsible for allowing the user to select a service. It provides a buttons and multiple notifications for the user to select a correct car. After selecting its calls `ServiePrice.tsx`
    - `ServiePrice.tsx`: This component is responsible for displaying the price of a selected service. It fetches the data from an API based on the service selected by the user. Calls `ServiceList.tsx` for list of all items in each service.
    - `ServiceList.tsx`: This component is responsible for displaying a list of all services. It fetches the data from an API and displays it in a list.
    
- `components/`: This directory contains all the components that are used mostly on the home page but can also be reused multiple times.
  - `Hero.tsx`: This component is responsible for rendering the hero section of the page. It contains a large, attention-grabbing background and Quick Assistance Input field.
  - `Navbar.tsx`: This component is responsible for rendering the navigation bar. It contains links to the different pages of the application.
  - `Footer.tsx`: This component is responsible for rendering the footer. It contains links to external resources, copyright information, and other miscellaneous information.
  - `Button.tsx`: This is a reusable button component. It can be customized with different props to change its appearance and behavior.
  - `End.tsx`: This component is responsible for rendering the end section of the page. It contains all the links at the end section and also links to social links that still need to be coded.
  - `Faq.tsx`: This component is responsible for rendering the FAQ section. It currently hardcoded to only three question and answers and more need to be added or backend needs to be made.
  - `AllBrands.tsx`: This component is responsible for displaying all the car brands. It fetches data from an API and displays it in a grid layout. Used in Home page and Services for now.
  - `GetApp.tsx`: This component is responsible for rendering the section that prompts users to get the App from Android.
  - `Service.tsx`: This component only has two description of Standard Services and Comprehensive Services these description are just placeholders.
  - `TopAd.tsx`: This component is responsible for rendering the top advertisement on the page. It could contains links to images and the ads are put in a carosel that changes after time

## Locally stored customs
Open `app/global.css` custom classname like hero-map and custom buttons
Open `constants/index.ts` custom lists like footerlinks
Open `tailwind.config.ts` custom colour of which ablue and ayellow are custom colours used for Autmovill colour

## Page Structure
The `app/page.tsx` is the main page tsx and most of the components of that page are form `app/components/`
The `app/Services/page.tsx` is for all the components of Service link and all the component codes are shared on the same

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
Select the repository as a new project and make sure to put all constants from `.env` file. Vercel will auto deploy the website whenever code is updated.

(Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.)

## Other Important files

- `package.json`: This file is crucial for managing dependencies that your project needs to run. It includes a list of packages your project depends on, information about its repositories, license, scripts, and other metadata like the project's name, description, and version. Install all these packages before starting
- `next.config.js`: This is a configuration file for Next.js. It has been currently used to unoptimise all the imges for better perfomance.