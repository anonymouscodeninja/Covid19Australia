export const GLOBAL_DATA_API_URL = 'https://covid19.mathdro.id/api';
export const DYNAMIC_API_URL = 'https://api.jsonbin.io/b/5eb204aa47a2266b14737fbe';

export const STATE_CODES = {
    NSW: 'New South Wales',
    QLD: 'Queensland',
    SA: 'South Australia',
    TAS: 'Tasmania',
    VIC: 'Victoria',
    WA: 'Western Australia',
    ACT: 'Australian Capital Territory',
    NT: 'North Territory'
};

export const statesArray = [
    { id: 'AUS', name: 'Australia' },
    { id: 'ACT', name: 'Australian Capital Territory' },
    { id: 'NSW', name: 'New South Wales' },
    { id: 'NT', name: 'North Territory' },
    { id: 'QLD', name: 'Queensland' },
    { id: 'SA', name: 'South Australia' },
    { id: 'TAS', name: 'Tasmania' },
    { id: 'VIC', name: 'Victoria' },
    { id: 'WA', name: 'Western Australia' }
];
const reverseStateCodes = {};
Object.keys(STATE_CODES).map((key, index) => {
    reverseStateCodes[STATE_CODES[key]] = key;
    return null;
});
export const STATE_CODES_REVERSE = reverseStateCodes;

const stateCodes = [];
Object.keys(STATE_CODES).map((key, index) => {
    stateCodes.push({ code: key, name: STATE_CODES[key] });
    return null;
});
export const STATE_CODES_ARRAY = stateCodes;


