import { imagesPath } from '@app/path';

export const data = {
  0: {
    form: false,

    specification: {
      'Frequency': '433MHz – 1.3GHz, 2.4GHz – 2.5GHz , 5.1GHz – 6GHz',
      Gain: [
        {
          P1: '3.5 – 7.9 dBi',
          P2: '10 dBi',
        },
      ],
      'Beamwidth Azimuth': [
        {
          P1: '60 – 90 Degrees (@ -3dB)',
          P2: 'Degrees (@ -3dB)',
        },
      ],
      'Beamwidth Elevation': [
        {
          P1: '80 – 110 Degrees (@ -3dB)',
          P2: '30 Degrees (@ -3dB)',
        },
      ],
      VSWR: '< 2',
      Impedance: '50 Ohms',
      'XPD (cross polarization discrimination)': '> 20dB',
      'RF Interface': '8 x N-type Female (2 per quadrant)',
    },

    mechanical_properties: {
      length: [40.5, 15.94],
      width: [53, 20.86],
      weight: [8, 17.6],
      color: 'white, green or desert',
      material: 'Plastic',
    },

    charts: {
      0: imagesPath + 'home/content/charts/' + 'chart_1_1',
      1: imagesPath + 'home/content/charts/' + 'chart_1_2'
    },
  },

  1: {
    form: false,
    specification: {
      'Frequency': '400MHz – 7.2GHz',
      Gain: '8-9 dBi',
      'Beamwidth Azimuth': '80 deg (@ -3dB)',
      'Beamwidth Elevation': '60 deg (@ -3 dB)',
      VSWR: '< 2',
      Impedance: '50 Ohms',
      'XPD (cross polarization discrimination)': '> 25dB',
      'RF Interface': '4 x N-type Female (1 per quadrant)',
    },

    mechanical_properties: {
      length: [84, 33.07],
      width: [84, 33.07],
      height: [115, 45.27],
      weight: [17, 37.47],
      color: 'white, green or desert',
      material: 'Plastic',
    },

    charts: {
      0: imagesPath + 'home/content/charts/' + 'chart_2'
    },
  },

  2: {
    form: false,
    specification: {
      'Frequency': '400MHz – 6GHz',
      Gain: '7 - 12 dBi',
      'Beamwidth Azimuth': '50 - 60 deg (@ -3dB)',
      'Beamwidth Elevation': '20 - 70 deg (@ -3 dB)',
      VSWR: '< 2',
      Impedance: '50 Ohms',
      'XPD (cross polarization discrimination)': '> 20dB',
      'RF Interface': '2 x N-type Female ',
    },

    mechanical_properties: {
      length: [63.2, 24.88],
      width: [[41.5, 34.7], [16.33, 14.84]],
      weight: [7, 15.4],
      color: 'white, green or desert',
      material: 'Plastic',
    },

    charts: {
      0: imagesPath + 'home/content/charts/' + 'chart_3'
    },
  },
  
  3: {
    form: false,
    specification: {
      'Frequency': '500MHz – 7.2GHz',
      Gain: '10 dBi',
      'Beamwidth Azimuth': '80 deg (@ -3dB)',
      'Beamwidth Elevation': '50 deg (@ -3 dB)',
      VSWR: '< 2',
      Impedance: '50 Ohms',
      'XPD (cross polarization discrimination)': '> 20dB',
      'RF Interface': '2 x N-type Female ',
    },

    mechanical_properties: {
      length: [72, 28.34],
      width: [29, 11.41],
      weight: [3.75, 8.26],
      color: 'white, green or desert',
      material: 'Plastic',
    },

    charts: {
      0: imagesPath + 'home/content/charts/' + 'chart_4'
    },
  },
  4: {
    form: true
  }
};
