# Country Travel List App

This project is a React application that fetches data from the [REST Countries API](https://restcountries.com/) and allows users to explore a list of countries. Users can add countries to their travel list, which is displayed separately.

## Features

- Fetches data from the REST Countries API (`https://restcountries.com/v3.1/all`)
- Displays a list of countries with details such as the country's name, flag, capital, population, and area.
- User can see specific country details by clicking the `Details`button.
- Allows users to add countries to their "Travel List" by click ` Add To Travel List` button.
- Displays the total number of countries and the number of countries added to the travel list.

## Available Scripts

- `npm run dev`: Starts the development server with Vite.
- `npm run build`: Builds the project for production.
- `npm run serve`: Serves the built production files.

## How It Works

- **Data Fetching**: On component mount, the app fetches data from the REST Countries API using `useEffect`.
- **State Management**: The app uses the `useState` hook to manage both the list of countries and the travel list.
- **Country Display**: Each country is rendered using the `Country` component, which includes details like the country name, flag, population, and area.
- **Travel List**: Users can add countries to a travel list, which is displayed separately from the main list of countries.

## API Reference

This app uses the [REST Countries API](https://restcountries.com/) to fetch country data.

- **Endpoint**: `https://restcountries.com/v3.1/all`
- **Response**: Provides detailed information about countries, including `name`, `capital`, `population`, `area`, `flags`, and more.
