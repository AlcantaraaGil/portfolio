import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export const MenuTab = ({ activeSection }) => {
  const [value, setValue] = React.useState(activeSection);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    // Determinar el ID del elemento al que desplazarse según la pestaña seleccionada
    let elementId;
    switch (newValue) {
      case 'home':
        elementId = 'home-section';
        break;
      case 'about':
        elementId = 'about-section';
        break;
      case 'projects':
        elementId = 'projects-section';
        break;
      default:
        elementId = '';
    }

    // Si hay un ID válido, desplazar hacia ese elemento
    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Sincronizar el valor de la pestaña con la sección activa al cambiar activeSection
  React.useEffect(() => {
    setValue(activeSection);
  }, [activeSection]);

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="home" label="home" />
        <Tab value="about" label="about me" />
        <Tab value="projects" label="projects" />
      </Tabs>
    </Box>
  );
};
