import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const categories = [
  { label: 'Todos', value: 'todos' },
  { label: 'Medicos Generales', value: 'Medicos Generales' },
  { label: 'Nutricionistas', value: 'Nutricionistas' },
  { label: 'Pediatrias', value: 'Pediatrias' },
  { label: 'Psicologos', value: 'Psicologos' },
  { label: 'Enfermeros', value: 'Enfermeros' },
  { label: 'Oftalmologos', value: 'Oftalmologos' },
  { label: 'Odontologos', value: 'Odontologos' },
];

const CategoryNavbar = ({ onCategoryChange }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    const selectedCategory = categories[newValue].value;    
    onCategoryChange(selectedCategory);
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      indicatorColor="primary"
      textColor="primary"
      aria-label="Category Navbar"
    >
      {categories.map((category, index) => (
        <Tab
          key={index}
          label={category.label}
          value={index}
        />
      ))}
    </Tabs>
  );
};

export default CategoryNavbar;
