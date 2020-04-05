import React from 'react';
import { Global } from '@emotion/core';

export const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  radii: [1, 2, 4, 8, 16],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    // Primary / Neutrals
    bluegray050: '#F0F4F8',
    bluegray100: '#D9E2EC',
    bluegray200: '#BCCCDC',
    bluegray300: '#9FB3C8',
    bluegray400: '#829AB1',
    bluegray500: '#627D98',
    bluegray600: '#486581',
    bluegray700: '#334E68',
    bluegray800: '#243B53',
    bluegray900: '#102A43',

    // Supporting
    lightbluevivid050: '#E3F8FF',
    lightbluevivid100: '#B3ECFF',
    lightbluevivid200: '#81DEFD',
    lightbluevivid300: '#5ED0FA',
    lightbluevivid400: '#40C3F7',
    lightbluevivid500: '#2BB0ED',
    lightbluevivid600: '#1992D4',
    lightbluevivid700: '#127FBF',
    lightbluevivid800: '#0B69A3',
    lightbluevivid900: '#035388',

    cyan050: '#E0FCFF',
    cyan100: '#BEF8FD',
    cyan200: '#87EAF2',
    cyan300: '#54D1DB',
    cyan400: '#38BEC9',
    cyan500: '#2CB1BC',
    cyan600: '#14919B',
    cyan700: '#0E7C86',
    cyan800: '#0A6C74',
    cyan900: '#044E54',

    pinkvivid050: '#FFE3EC',
    pinkvivid100: '#FFB8D2',
    pinkvivid200: '#FF8CBA',
    pinkvivid300: '#F364A2',
    pinkvivid400: '#E8368F',
    pinkvivid500: '#DA127D',
    pinkvivid600: '#BC0A6F',
    pinkvivid700: '#A30664',
    pinkvivid800: '#870557',
    pinkvivid900: '#620042',

    redvivid050: '#FFE3E3',
    redvivid100: '#FFBDBD',
    redvivid200: '#FF9B9B',
    redvivid300: '#F86A6A',
    redvivid400: '#EF4E4E',
    redvivid500: '#E12D39',
    redvivid600: '#CF1124',
    redvivid700: '#AB091E',
    redvivid800: '#8A041A',
    redvivid900: '#610316',

    yellowvivid050: '#FFFBEA',
    yellowvivid100: '#FFF3C4',
    yellowvivid200: '#FCE588',
    yellowvivid300: '#FADB5F',
    yellowvivid400: '#F7C948',
    yellowvivid500: '#F0B429',
    yellowvivid600: '#DE911D',
    yellowvivid700: '#CB6E17',
    yellowvivid800: '#B44D12',
    yellowvivid900: '#8D2B0B',

    teal050: '#EFFCF6',
    teal100: '#C6F7E2',
    teal200: '#8EEDC7',
    teal300: '#65D6AD',
    teal400: '#3EBD93',
    teal500: '#27AB83',
    teal600: '#199473',
    teal700: '#147D64',
    teal800: '#0C6B58',
    teal900: '#014D40',
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      color: 'gray10',
    },
  },
};

export const Reset = (): React.ReactElement =>
  React.createElement(Global, {
    styles: {
      body: {
        margin: '0',
        backgroundColor: 'white',
        overscrollBehavior: 'none',
      },
    },
  });
