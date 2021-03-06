import EmbedDiagnose from '../src';

EmbedDiagnose({
  elementId: 'app',
  param: {
    questions: [
      {
        id: '1',
        text: 'お茶を飲むのはどんな場面ですか？',
        choices: [
          {
            text: 'お茶を楽しむ時に',
            nextQuestionId: '1-1',
          },
          {
            text: '忙しいひと時に',
            nextQuestionId: '1-2',
          },
          {
            text: '就寝前に',
            nextQuestionId: '1-3',
          },
        ],
      },
      {
        id: '1-1',
        text: 'お茶の何を楽しみたいですか？',
        choices: [
          {
            text: '茶道',
            nextResultId: '1',
          },
          {
            text: '味',
            nextQuestionId: '1-1-2',
          },
          {
            text: '香り',
            nextQuestionId: '1-1-3',
          },
          {
            text: '色',
            nextResultId: '2',
          },
        ],
      },
      {
        id: '1-1-2',
        text: 'どちらの味が好みですか？',
        choices: [
          {
            text: '甘味',
            nextResultId: '3',
          },
          {
            text: '渋み',
            nextResultId: '4',
          },
        ],
      },
      {
        id: '1-1-3',
        text: 'どちらの味が好みですか？',
        choices: [
          {
            text: '甘味',
            nextResultId: '5',
          },
          {
            text: '渋み',
            nextResultId: '6',
          },
        ],
      },
      {
        id: '1-2',
        text: 'どれくらい忙しいですか？',
        choices: [
          {
            text: 'とても忙しい',
            nextResultId: '7',
          },
          {
            text: 'やや忙しい',
            nextQuestionId: '1-2-2',
          },
        ],
      },
      {
        id: '1-2-2',
        text: 'どちらの味が好みですか？',
        choices: [
          {
            text: '甘味',
            nextResultId: '8',
          },
          {
            text: '渋み',
            nextResultId: '9',
          },
        ],
      },
      {
        id: '1-3',
        text: 'どちらの味が好みですか？',
        choices: [
          {
            text: '甘味',
            nextResultId: '10',
          },
          {
            text: '渋み',
            nextResultId: '11',
          },
        ],
      },
    ],
    results: [
      {
        id: '1',
        templateKey: '1',
        sanitizedParams: {
          text: '抹茶',
        },
      },
      {
        id: '2',
        templateKey: '1',
        sanitizedParams: {
          text: '玉露・冠茶',
        },
      },
      {
        id: '3',
        templateKey: '1',
        sanitizedParams: {
          text: '玉露・冠茶(緑色が綺麗)',
        },
      },
      {
        id: '4',
        templateKey: '1',
        sanitizedParams: {
          text: '煎茶',
        },
      },
      {
        id: '5',
        templateKey: '1',
        sanitizedParams: {
          text: 'ほうじ茶',
        },
      },
      {
        id: '6',
        templateKey: '1',
        sanitizedParams: {
          text: '玄米茶',
        },
      },
      {
        id: '7',
        templateKey: '2',
        sanitizedParams: {
          text: 'お仕事ご苦労様です。',
          text2: 'たまにはちょっと美味しいティーパックはいかがですか？',
        },
      },
      {
        id: '8',
        templateKey: '1',
        sanitizedParams: {
          text: 'ほうじ茶(ポットで入れても美味しい)',
        },
      },
      {
        id: '9',
        templateKey: '1',
        sanitizedParams: {
          text: '美味しい玄米茶(ポットで入れても美味しい)',
        },
      },
      {
        id: '10',
        templateKey: '1',
        sanitizedParams: {
          text: 'ほうじ茶(カフェイン控えめ)',
        },
      },
      {
        id: '11',
        templateKey: '1',
        sanitizedParams: {
          text: '玄米茶(カフェイン控えめ)',
        },
      },
    ],
    resultTemplates: [
      {
        key: '1',
        sanitizedHtml: `
          <div class="embed_diagnose_custom_1">
            <p>あなたにオススメのお茶は%text%です！</p>
          </div>
        `,
      },
      {
        key: '2',
        sanitizedHtml: `
          <div class="embed_diagnose_custom_2">
            <p>%text%</p>
            <p>%text2%</p>
          </div>
        `,
      },
    ],
    config: {
      firstQuestionId: '1',
    },
    customClassNames: {
      root: 'custom_root_class',
    },
  },
});
