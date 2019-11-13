import { colors } from './colors'

export const mockedCheckboxes = [
  {
    title: 'Stress Resistance',
    checked: true,
  },
  {
    title: 'Systematic Approach',
    checked: false,
  },
  {
    title: 'Autonomy',
    checked: false,
  },
  {
    title: 'Service Orientation',
    checked: true,
  },
  {
    title: 'Problem solving',
    checked: true,
  },
  {
    title: 'Cooperation',
    checked: true,
  },
];

export const mockedData = {
  title: 'Tengai GBG/Örebro/Övriga (ID5829)',
  department: 'Marketing',
  roleDescription: 'Long description, perhaps two rows or more goes here..',
  assignedTo: [
    {
      id: 0,
      name: 'Jenny A',
      imgUrl: 'img/jenny.png',
    },
    {
      id: 1,
      name: 'Lisa E',
      imgUrl: 'img/lisa.png',
    },
  ],
  data: {
    total: 6,
    entries: [
      {
        id: 0,
        color: colors.baseColor,
        cssColor: colors.baseColor,
        title: 'Interview Completed',
        count: 2,
        value: 25,
      },
      {
        id: 1,
        color: 'url(#gradient1)',
        cssColor:
          'linear-gradient(317deg, rgba(8,185,107,1) 0%, rgba(81,127,246,1) 50%, rgba(255,51,51,1) 100%)',
        title: 'Scored and evaluated',
        count: 2,
        value: 25,
      },
      {
        id: 2,
        color: colors.lightGrey,
        cssColor: colors.lightGrey,
        title: 'Not interviewed yet',
        count: 4,
        value: 50,
      },
    ],
  },
}
