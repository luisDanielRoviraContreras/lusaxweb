

export const state = () => ({
  invert: false,
  locales: ['en', 'es'],
  locale: 'en',
  color: '',
  bg: '',
  activePoints: false,
  back: false,
  hoverback: false,
  scrollx: false,
  sections: [
    {
      title: 'All',
      items:[
        {
          section: 'behance',
          name: 'Game of Thrones',
          number: '14',
          img: 'worksfolder/2.jpg',
          prox: false,
          awards: 2
        },
        {
          section: 'behance',
          name: 'Union Merch',
          number: '13',
          img: 'worksfolder/9.jpg',
          prox: false,
          awards: 2
        },
        {
          section: 'behance',
          name: 'Red Dead Redemption 2',
          number: '12',
          img: 'worksfolder/3.jpg',
          prox: false,
          awards: 2
        },
        {
          section: 'behance',
          name: 'Cyberpunk',
          number: '11',
          img: 'worksfolder/1.jpg',
          prox: true
        },
        {
          section: 'behance',
          name: 'Blade runner 2049',
          number: '10',
          img: 'worksfolder/12.jpg',
          prox: true
        },
        {
          section: 'behance',
          name: 'Paradigm network',
          number: '09',
          img: 'worksfolder/13.jpg',
          prox: true
        },
        {
          section: 'behance',
          name: 'Death stranding',
          number: '08',
          img: 'worksfolder/14.jpg',
          prox: true
        },
        {
          section: 'behance',
          name: 'Vuesax',
          number: '07',
          img: 'worksfolder/5.jpg',
          prox: true
        },
        {
          section: 'behance',
          name: 'Stranger Things',
          number: '06',
          img: 'worksfolder/6.jpg',
          prox: true
        },
        {
          section: 'behance',
          name: 'Thor Ragnarok',
          number: '05',
          img: 'worksfolder/15.jpg',
          prox: true
        },
        {
          section: 'behance',
          name: 'Avengers Infinity War',
          number: '04',
          img: 'worksfolder/0.jpg',
          prox: true
        },
        {
          section: 'behance',
          name: 'Micro',
          number: '03',
          img: 'worksfolder/8.jpg',
          prox: true
        },

        {
          section: 'behance',
          name: 'Wynnr',
          number: '02',
          img: 'worksfolder/10.jpg',
          prox: true
        },
        {
          section: 'behance',
          name: 'Intenova',
          number: '01',
          img: 'worksfolder/11.jpg',
          prox: true
        },
      ]
    }
  ],
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}

export const actions = {

}

export const strict = false
