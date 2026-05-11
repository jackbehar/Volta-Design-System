import React from 'react';
import { Box } from '../../index';
import AtomsHero from './atoms/components/AtomsHero';
import ButtonsSection from './atoms/components/ButtonsSection';
import FormFieldsSection from './atoms/components/FormFieldsSection';
import SelectionSection from './atoms/components/SelectionSection';
import VisualElementsSection from './atoms/components/VisualElementsSection';
import CardsContainersSection from './atoms/components/CardsContainersSection';

function AtomsFullPattern() {
  return (
    <Box width="100%" style={{ backgroundColor: '#F8FAFC' }}>
      <AtomsHero />
      <Box style={{ padding: '32px 40px', display: 'flex', flexDirection: 'column', gap: '44px' }}>
        <ButtonsSection />
        <FormFieldsSection />
        <SelectionSection />
        <VisualElementsSection />
        <CardsContainersSection />
      </Box>
    </Box>
  );
}

const meta = {
  title: 'Patterns/Atoms',
  component: AtomsFullPattern,
  tags: ['autodocs'],
};

export default meta;

export const FullPage = { render: () => <AtomsFullPattern /> };
export const Buttons = { render: () => <ButtonsSection /> };
export const FormFields = { render: () => <FormFieldsSection /> };
export const SelectionControls = { render: () => <SelectionSection /> };
export const VisualElements = { render: () => <VisualElementsSection /> };
export const CardsAndContainers = { render: () => <CardsContainersSection /> };
