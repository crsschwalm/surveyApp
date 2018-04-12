const survey = {
  id: '123',
  author: 'cschwalm',
  name: 'Example Survey',
  description: 'This is an example of what a survey could look like',
  fields: [
    {
      type: 'checkAll',
      fieldTitle: 'Check all That apply',
      options: [
        { id: '1234', label: 'first check' },
        { id: '12345', label: 'second check' },
        { id: '123456', label: 'third check' }
      ]
    },
    {
      type: 'selectFrom',
      fieldTitle: 'Select the one that applies',
      options: [
        { id: '1234', label: 'first option' },
        { id: '12345', label: 'second option' },
        { id: '123456', label: 'third option' }
      ]
    },
    {
      type: 'textInput',
      fieldTitle: 'Tell me something'
    }
  ],
  startDate: new Date('April 1, 2018'),
  endDate: new Date('December 17, 2018')
};

export default survey;
