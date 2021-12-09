import NetRegexes from '../../../../../resources/netregexes';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';
import { RaidbossData } from '../../../../../types/data';
import { TriggerSet } from '../../../../../types/trigger';

export type Data = RaidbossData;

const triggerSet: TriggerSet<Data> = {
  zoneId: ZoneId.TheMinstrelsBalladHydaelynsCall,
  timelineFile: 'hydaelyn-ex.txt',
  triggers: [
    {
      id: 'HydaelenEx Shining Saber',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '68C8', source: 'Hydaelyn', capture: false }),
      response: Responses.getTogether(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Hydaelyn': 'Hydaelyn',
        'Mystic Refulgence': 'Truglicht',
        'Parhelion': 'Parhelion',
      },
      'replaceText': {
        '--transition--': '--Übergang--',
        '--top-middle': '--Oben-Mitte',
        '--middle': '--Mitte',
        'Anthelion': 'Anthelion',
        'Aureole': 'Aureole',
        'Beacon': 'Lichtschein',
        'Bright Spectrum': 'Gleißendes Spektrum',
        'Crystalline Blizzard III': 'Kristall-Eisga',
        'Crystalline Stone III': 'Kristall-Steinga',
        'Crystalline Water/Stone III': 'Kristall-Aquaga/Steinga',
        'Crystalline Water III': 'Kristall-Aquaga',
        'Crystallize': 'Kristallisieren',
        'Dichroic Spectrum': 'Dichroitisches Spektrum',
        'Echoes': 'Echos',
        'Equinox': 'Äquinoktium',
        'Exodus': 'Exodus',
        '(?<!Radiant )Halo': 'Halo',
        'Heros\'s Glory': 'Glorie des Heros',
        'Heros\'s Radiance': 'Glanz des Heros',
        'Heros\'s Sundering': 'Schlag des Heros',
        'Highest Holy': 'Höchstes Sanctus',
        'Incandescence': 'Inkandeszenz',
        'Infralateral Arc': 'Infralateralbogen',
        'Lateral Aureole': 'Lateralaureole',
        'Light of the Crystal': 'Licht des Kristalls',
        'Lightwave': 'Lichtwoge',
        'Magos\'s Radiance': 'Glanz des Magos',
        'Mousa\'s Scorn': 'Zorn der Mousa',
        'Parhelic Circle': 'Horizontalkreis',
        '(?<!Sub)Parhelion': 'Parhelion',
        'Pure Crystal': 'Reiner Kristall',
        'Radiant Halo': 'Strahlender Halo',
        'Shining Saber': 'Strahlender Säbel',
        'Subparhelion': 'Subparhelion',
      },
    },
    {
      'locale': 'fr',
      'missingTranslations': true,
      'replaceSync': {
        'Hydaelyn': 'Hydaelyn',
        'Mystic Refulgence': 'illusion de Lumière',
        'Parhelion': 'Parhélie',
      },
      'replaceText': {
        'Anthelion': 'Anthélie',
        'Aureole': 'Auréole',
        'Beacon': 'Rayon de Lumière',
        'Bright Spectrum': 'Spectre lumineux',
        'Crystalline Blizzard III': 'Méga Glace cristallisée',
        'Crystalline Stone III': 'Méga Terre cristallisée',
        'Crystalline Water III': 'Méga Eau cristallisée',
        'Crystallize': 'Cristallisation',
        'Dichroic Spectrum': 'Spectre dichroïque',
        'Echoes': 'Échos',
        'Equinox': 'Équinoxe',
        'Exodus': 'Exode',
        '(?<!Radiant )Halo': 'Halo',
        'Heros\'s Glory': 'Gloire du héros',
        'Heros\'s Radiance': 'Radiance du héros',
        'Heros\'s Sundering': 'Fragmentation du héros',
        'Highest Holy': 'Miracle suprême',
        'Incandescence': 'Incandescence',
        'Infralateral Arc': 'Arc infralatéral',
        'Lateral Aureole': 'Auréole latérale',
        'Light of the Crystal': 'Lumière du cristal',
        'Lightwave': 'Vague de Lumière',
        'Magos\'s Radiance': 'Radiance du mage',
        'Mousa\'s Scorn': 'Mépris de la muse',
        'Parhelic Circle': 'Cercle parhélique',
        '(?<!Sub)Parhelion': 'Parhélie',
        'Pure Crystal': 'Cristal pur',
        'Radiant Halo': 'Halo radiant',
        'Shining Saber': 'Sabre de brillance',
        'Subparhelion': 'Subparhélie',
      },
    },
    {
      'locale': 'ja',
      'missingTranslations': true,
      'replaceSync': {
        'Hydaelyn': 'ハイデリン',
        'Mystic Refulgence': '幻想光',
        'Parhelion': 'パルヘリオン',
      },
      'replaceText': {
        'Anthelion': 'アントゥヘリオン',
        'Aureole': 'オーレオール',
        'Beacon': '光芒',
        'Bright Spectrum': 'ブライトスペクトル',
        'Crystalline Blizzard III': 'クリスタル・ブリザガ',
        'Crystalline Stone III': 'クリスタル・ストンガ',
        'Crystalline Water III': 'クリスタル・ウォタガ',
        'Crystallize': 'クリスタライズ',
        'Dichroic Spectrum': 'ダイクロイックスペクトル',
        'Echoes': 'エコーズ',
        'Equinox': 'エクイノックス',
        'Exodus': 'エクソダス',
        '(?<!Radiant )Halo': 'ヘイロー',
        'Heros\'s Glory': 'ヘロイスグローリー',
        'Heros\'s Radiance': 'ヘロイスラジエンス',
        'Heros\'s Sundering': 'ヘロイスサンダリング',
        'Highest Holy': 'ハイエストホーリー',
        'Incandescence': '幻閃光',
        'Infralateral Arc': 'ラテラルアーク',
        'Lateral Aureole': 'サイド・オーレオール',
        'Light of the Crystal': 'ライト・オブ・クリスタル',
        'Lightwave': 'ライトウェーブ',
        'Magos\'s Radiance': 'マゴスラジエンス',
        'Mousa\'s Scorn': 'ムーサスコーン',
        'Parhelic Circle': 'パーヘリックサークル',
        '(?<!Sub)Parhelion': 'パルヘリオン',
        'Pure Crystal': 'ピュアクリスタル',
        'Radiant Halo': 'レディアントヘイロー',
        'Shining Saber': 'シャイニングセイバー',
        'Subparhelion': 'サブパルヘリオン',
      },
    },
  ],
};

export default triggerSet;