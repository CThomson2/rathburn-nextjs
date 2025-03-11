
interface select {
id:number;
label:string;
value:string;
}

//Default Select
export const defaultselect:select[] = [
    {id:1, label:"Open this select menu", value:'Open this select menu'},
    {id:2, label:"1", value:'1'},
    {id:3, label:"2", value:'2'},
    {id:4, label:"3", value:'3'},
]



//Basic Tom Select
interface basic {
  value:string;
}
export const Basicselect:basic[] = [
    { value:"Select a person..."},
    { value:"Thomas Edison"},
    {value:"Nikola"},
    {value:"Nikola Tesla"},
    {value:"Arnold Schwarzenegger"},
]

//Multiple dropdown select
interface multi {
  value:string;
  label:string;
}
export const multiDropdownSelect:multi[] = [
    { value: "Alabama", label: "Alabama" },
    { value: "Alaska", label: "Alaska" },
    { value: "Arizona", label: "Arizona" },
    { value: "Arkansas", label: "Arkansas" },
    { value: "California", label: "California" },
    { value: "Colorado", label: "Colorado" },
    { value: "Connecticut", label: "Connecticut" },
    { value: "Delaware", label: "Delaware" },
    { value: "District of Columbia", label: "District of Columbia" },
    { value: "Florida", label: "Florida" },
    { value: "Georgia", label: "Georgia" },
    { value: "Hawaii", label: "Hawaii" },
    { value: "Idaho", label: "Idaho" },
    { value: "Illinois", label: "Illinois" },
    { value: "Indiana", label: "Indiana" },
    { value: "Iowa", label: "Iowa" },
    { value: "Kansas", label: "Kansas" },
    { value: "Kentucky", label: "Kentucky" },
    { value: "Louisiana", label: "Louisiana" },
    { value: "Maine", label: "Maine" },
    { value: "Maryland", label: "Maryland" },
    { value: "Massachusetts", label: "Massachusetts" },
    { value: "Michigan", label: "Michigan" },
    { value: "Minnesota", label: "Minnesota" },
    { value: "Mississippi", label: "Mississippi" },
    { value: "Missouri", label: "Missouri" },
    { value: "Montana", label: "Montana" },
    { value: "Nebraska", label: "Nebraska" },
    { value: "Nevada", label: "Nevada" },
    { value: "New Hampshire", label: "New Hampshire" },
    { value: "New Jersey", label: "New Jersey" },
    { value: "New Mexico", label: "New Mexico" },
    { value: "New York", label: "New York" },
    { value: "North Carolina", label: "North Carolina" },
    { value: "North", label: "North" },
    { value: "Ohio", label: "Ohio" },
    { value: "Oklahoma", label: "Oklahoma" },
    { value: "Oregon", label: "Oregon" },
    { value: "Pennsylvania", label: "Pennsylvania" },
    { value: "Rhode Island", label: "Rhode Island" },
    { value: "South Carolina", label: "South Carolina" },
    { value: "South Dakota", label: "South Dakota" },
    { value: "Tennessee", label: "Tennessee" },
    { value: "Texas", label: "Texas" },
    { value: "Utah", label: "Utah" },
    { value: "Vermont", label: "Vermont" },
    { value: "Virginia", label: "Virginia" },
    { value: "Washington", label: "Washington" },
    { value: "West Virginia", label: "West Virginia" },
    { value: "Wisconsin", label: "Wisconsin" },
    { value: "Wyoming", label: "Montana" }
  ];


  //Option groups
interface group1 {
  value:string;
  label:string;
}

  const Group1:group1[] = [
    { value: "London", label: "London" },
    { value: "Manchester", label: "Manchester" },
    { value: "Liverpool", label: "Liverpool" },
  ];

  interface group2 {
    value:string;
    label:string;
  }

  const Group2:group2[] = [
    { value: "Paris", label: "Paris" },
    { value: "Lyon", label: "Lyon" },
    { value: "Marseille", label: "Marseille" },
  ];
  interface group3 {
    value:string;
    label:string;
  }
  const Group3:group3[] = [
    { value: "Hamburg", label: "Hamburg" },
    { value: "Munich", label: "Munich" },
    { value: "Berlin", label: "Berlin" },
  ];
  interface group4 {
    value:string;
    label:string;
  }
  const Group4:group4[] = [
    { value: "New York", label: "New York" },
    { value: "Washington", label: "Washington" },
    { value: "Michigan", label: "Michigan" },
  ];
  interface group5 {
    value:string;
    label:string;
    isDisabled:string;
  }
  const disabledGroup:group5[] = [
    { value: "New York", label: "New York", isDisabled:''},
    { value: "Washington", label: "Washington", isDisabled: "isDisabled" },
    { value: "Michigan", label: "Michigan", isDisabled: "isDisabled" },
  ];
  interface group6 {
    value:string;
    label:string;
  }
  const Group5 :group6[] = [
    { value: "Madrid", label: "Madrid" },
    { value: "Barcelona", label: "Barcelona" },
    { value: "Malaga", label: "Malaga" },
  ];
  interface group7 {
    value:string;
    label:string;
  }
  const Group6:group7[] = [
    { value: "Montreal", label: "Montreal" },
    { value: "Toronto", label: "Toronto" },
    { value: "Vancouver", label: "Vancouver" },
  ];
  export const DisabledGroupData = [
    {
      label: "UK",
      options: Group1
    },
    {
      label: "FR",
      options: Group2,
    },
    {
      label: "SP",
      options: Group3,
    },
    {
      label: "UK",
      options: disabledGroup,
    },
    {
      label: "US",
      options: Group5,
    },
    {
      label: "CA",
      options: Group6,
    },
  ];

  //Single Select

  interface Select {
    id:number;
    value:string;
  }
  export const singleselect:Select[] = [
    {id:1, value:"This is a placeholder"},
    {id:2, value:"Choice 1"},
    {id:3, value:"Choice 2"},
    {id:4, value:"Choice 3"},
  ]

  
  interface Select1 {
    label:string;
    value:string;
    isDisabled:string;
  }

  //Options Added Via Config With No Search
export const Optionwithnosearch = [
  { value: 'Label One', label: 'Label One' },
  { value: 'Label Two', label: 'Label Two' },
  { value: 'Label Three', label: 'Label Three' },
  { value: 'Label Four', label: 'Label Four' },
  { value: 'Label Five', label: 'Label Five' },
  { value: 'Label Six', label: 'Label Six' },
];
  export const Multipleselectdata: Select1[]=[
    {value:'Choice 1', label:'Choice 1',isDisabled:""},
    {value:'Choice 2', label:'Choice 2',isDisabled:""},
    {value:'Choice 3', label:'Choice 3',isDisabled:""},
    {value:'Choice 4', label:'Choice 4',isDisabled:""},
    {value:'Choice 5', label:'Choice 5',isDisabled:""},
    {value:'Choice 6', label:'Choice 6'  , isDisabled: 'isDisabled'},
    ];
    interface multiselect {
      value:string;
      label:string;
    }
    export const Multipleselectdata1 :multiselect[]=[
      {value:'Choice 1', label:'Choice 1'},
      {value:'Choice 2', label:'Choice 2'},
      {value:'Choice 3', label:'Choice 3'},
      {value:'Choice 4', label:'Choice 4'}
      ];

      export const Zerodata=[
        {value:'Label One', label:'Label One'},
        {value:'Label Two', label:'Label Two'},
        {value:'Label Three', label:'Label Three'},
        {value:'Label Four', label:'Label Four'},
        {value:'Label Five', label:'Label Five'},
        {value:'Label Six', label:'Label Six'},
        ];