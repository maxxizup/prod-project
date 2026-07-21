import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const LightModal = Template.bind({});
LightModal.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolore dolores eligendi, enim eos ex fugit harum ipsa labore laborum maiores modi non nostrum porro quia, ratione reprehenderit ullam unde.',
    isOpen: true,
};
export const DarkModal = Template.bind({});

DarkModal.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolore dolores eligendi, enim eos ex fugit harum ipsa labore laborum maiores modi non nostrum porro quia, ratione reprehenderit ullam unde.',
    isOpen: true,
};
DarkModal.decorators = [ThemeDecorator(Theme.DARK)];
