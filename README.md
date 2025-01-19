# DPS Frontend Challenge - User Management System

## Project Overview

A CRM interface focused on efficient user data management and visualization. The goal was to achieve the given tasks efficiently following the best coding practices

## Development Approach

### Component Structure

I chose to split the interface into three main components:

-   SearchBar
-   CityDropdown
-   HighlightCheckbox

This separation makes the code more maintainable and reusable. Each component handles its specific functionality, making it easier to test and modify individual features.

### Performance Considerations

-   Implemented debouncing for the search functionality to prevent excessive filtering on every keystroke
-   Used useMemo for computing unique cities and oldest users to avoid unnecessary recalculations
-   Kept state management simple with React's built-in hooks, as Redux would be overkill for this scale

### UI/UX Decisions

-   Placed all filters at the top for easy access as also provided in the initial image
-   Added hover effects and clear visual highlighting for better user interaction
-   Maintained consistent styling across components

### Data Management

-   Centralized data fetching in the main App component
-   Implemented proper loading and error states
-   Used TypeScript interfaces to ensure data consistency
-   Kept filtered data logic clear and maintainable

## Setup and Installation

```bash
npm install
npm run dev
```

Access the application at `http://localhost:3000`

## Features

-   Dynamic name search
-   City-based filtering
-   Age highlighting functionality
-   Responsive design
-   Error handling

## Project Structure

```
src/
├── components/
│   ├── SearchBar/       # Handles name filtering
│   ├── CityDropdown/    # Manages city selection
│   └── HighlightCheckbox/  # Controls age highlighting
├── App.tsx             # Main application logic
└── App.css            # Styling
```

## Technologies Used

-   React 18
-   TypeScript
-   Vite
-   Lodash
