import DHIPortals from 'components/Others/DHIGRAS/DhiPortals';
import DHIWebsite from 'components/Others/DHIGRAS/DhiWebsite';
import DHIVideo from 'components/Others/DHIGRAS/DhiVideo';

import Cover from 'components/Others/Installations/Cover';
// import LudicCode from 'components/Others/Installations/LudicCode';
// import SnakeSkin from 'components/Others/Installations/SnakeSkin';
import Nodes from 'components/Others/Installations/Nodes';
import UrbanPlanen from 'components/Others/Installations/UrbanPlanen';
import StopMotionMachine from 'components/Others/Installations/StopMotionMachine';
import Tingbjerg from 'components/Others/Installations/Tingbjerg';
import ShyDie from 'components/Others/Installations/ShyDie';
// import Sphero from 'components/Others/Installations/Sphero';
import FreakRegister from 'components/Others/Installations/FreaksRegister';

import AalborgSurreal from 'components/Others/Web/AalborgSurreal';
import InformationAge from 'components/Others/Web/InformationAge';
import FreeSpeech from 'components/Others/Web/FreeSpeech';
import RebekkaBorum from 'components/Others/Web/RebekkaBorum';

import Anthropia from 'components/Others/Videos/Anthropia';
import DoomRoom from 'components/Others/Videos/DoomRoom';
import Pilebyg from 'components/Others/Videos/Pilebyg';
import Sofar from 'components/Others/Videos/Sofar';
import Oersterk from 'components/Others/Videos/Oersterk';
import SorteSkole from 'components/Others/Videos/SorteSkole';
import LPS from 'components/Others/Videos/LPS';
import AboveGround from 'components/Others/Videos/AboveGround';
import JustWater from 'components/Others/Videos/JustWater';
import Aman from 'components/Others/Videos/Aman';
import FittingIn from 'components/Others/Videos/FittingIn';
import Au2Pilot from 'components/Others/Videos/Au2Pilot';

export const categories = [
  {
    group: 'DHI GRAS',
    projects: [
      { link: 'dhi-portals', name: 'portals', comp: DHIPortals },
      { link: 'dhi-website', name: 'website', comp: DHIWebsite },
      { link: 'dhi-videos', name: 'videos', comp: DHIVideo },
    ],
  },
  {
    group: 'INSTALLATIONS',
    projects: [
      // { link: 'ludiccode', name: 'ludic code', comp: LudicCode },
      // { link: 'snakeskin', name: 'snake skin', comp: SnakeSkin },
      { link: 'nodes', name: 'nodes', comp: Nodes },
      {
        link: 'stopmotion',
        name: 'stop motion machine',
        comp: StopMotionMachine,
      },
      { link: 'cover', name: 'cover', comp: Cover },
      { link: 'urbanplanen', name: 'urbanplanen', comp: UrbanPlanen },
      { link: 'tingbjerg', name: 'tingbjerg', comp: Tingbjerg },
      {
        link: 'thefreaksregister',
        name: 'the freaks register',
        comp: FreakRegister,
      },
      { link: 'theshydie', name: 'the shy die', comp: ShyDie },
      // { link: 'sphero', name: 'sphero', comp: Sphero },
    ],
  },
  {
    group: 'WEB',
    projects: [
      { link: 'rebekkaborum', name: 'rebekka borum', comp: RebekkaBorum },
      { link: 'aalborgsurreal', name: 'aalborg surreal', comp: AalborgSurreal },
      {
        link: 'freespeech',
        name: 'platform for free speech',
        comp: FreeSpeech,
      },
      { link: 'informationage', name: 'information age', comp: InformationAge },
    ],
  },
  {
    group: 'VIDEOS',
    projects: [
      { link: 'doomroom', name: 'vr doomroom', comp: DoomRoom },
      { link: 'anthropia', name: 'vr anthropia', comp: Anthropia },
      { link: 'pilebyg', name: 'pilebyg', comp: Pilebyg },
      { link: 'sofar', name: 'sofar', comp: Sofar },
      { link: 'oersterk', name: 'oersterk', comp: Oersterk },
      { link: 'densorteskole', name: 'den sorte skole', comp: SorteSkole },
      { link: 'lps', name: 'laylor performance systems', comp: LPS },
      {
        link: 'aboveground',
        name: 'aboveground art supply',
        comp: AboveGround,
      },
      { link: 'justwater', name: 'just water', comp: JustWater },
      { link: 'aman', name: 'a man and his mind', comp: Aman },
      { link: 'fittingin', name: 'fitting in', comp: FittingIn },
      { link: 'au2pilot', name: 'au2pilot', comp: Au2Pilot },
    ],
  },
];
