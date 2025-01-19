# DPS Frontend Challenge - User Management System

## Overview

This project implements a CRM (Customer Relationship Management) interface for managing and viewing user data. It provides features for searching, filtering, and highlighting specific user records.

## Features Implemented

-   **Name Search**: Dynamic search functionality with debounce for efficient filtering
-   **City Filter**: Dropdown to filter users by city
-   **Age Highlight**: Option to highlight the oldest person in each city
-   **Responsive Design**: Works well on different screen sizes
-   **Error Handling**: Proper loading states and error messages

## Technologies Used

-   React 18
-   TypeScript
-   Vite
-   Lodash (for debounce functionality)

## Project Structure

```
src/
├── components/
│   ├── SearchBar/
│   ├── CityDropdown/
│   └── HighlightCheckbox/
├── App.tsx
└── App.css
```

## Implementation Details

### Search Functionality

-   Implements debounced search to optimize performance
-   Searches through both first and last names
-   Updates results in real-time

### City Filtering

-   Dynamically generates city list from available data
-   Allows filtering users by their city
-   Includes option to show all cities

### Highlight Feature

-   Identifies the oldest person in each city
-   Provides visual highlighting with distinct background color
-   Can be toggled on/off

## Best Practices Followed

-   Type safety with TypeScript
-   Component-based architecture
-   Responsive design
-   Performance optimization with useMemo and debounce
-   Clean and maintainable code structure
-   Proper error handling
-   Accessibility considerations

## Future Improvements

-   Add sorting functionality
-   Implement pagination for large datasets
-   Add more filter options
-   Enhance mobile responsiveness
-   Add unit tests
-   Add data export functionality
