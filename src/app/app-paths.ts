export const PATHS: PathContainer = {

    home: {
        main: 'home',
    },

    about_us: {
        main: 'about-us',
    },

    partners: {
        main: 'partnerek',
    },

    events: {
        main: 'esemenyek',
    },

    contact: {
        main: 'kapcsolat',
    }
};

export type PathDescriptor = {
    [subKeys: string]: string;
    main: string;
};

export type PathContainer = {
    [moduleName: string]: PathDescriptor;
};
