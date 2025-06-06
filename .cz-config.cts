const config = {
  types: [
    {
      name: 'feat:      ✨ 新機能の追加',
      value: ':sparkles: feat',
    },
    {
      name: 'perf:      ⚡️ パフォーマンス改善',
      value: ':zap: perf',
    },
    {
      name: 'improve:   🎨 コードの構造/ロジックの改善',
      value: ':art: improve',
    },
    {
      name: 'update:    🚨 リンターの警告修正',
      value: ':rotating_light: update',
    },
    {
      name: 'update:    🩹 軽微な修正',
      value: ':adhesive_bandage: update',
    },
    {
      name: 'fix:       🐛 バグ修正',
      value: ':bug: fix',
    },
    {
      name: 'hotfix:    🚑 緊急バグ修正',
      value: ':ambulance: hotfix',
    },
    {
      name: 'typo:      ✏️ typo修正',
      value: ':pencil2: typo',
    },
    {
      name: 'refactor:  ♻️ リファクタリング',
      value: ':recycle: refactor',
    },
    {
      name: 'delete:    🔥 ファイルやコードの削除',
      value: ':fire: delete',
    },
    {
      name: 'type:      🏷️ 型の追加/更新',
      value: ':label: type',
    },
    {
      name: 'docs:      📝 ドキュメンテーションの追加/更新',
      value: ':memo: docs',
    },
    {
      name: 'docs:      💡 コメントの追加/更新',
      value: ':bulb: docs',
    },
    {
      name: 'move:      🚚 ファイルやディレクトリの移動',
      value: ':truck: move',
    },
    {
      name: 'test:      ✅ テストの追加/更新/合格',
      value: ':white_check_mark: test',
    },
    {
      name: 'chore:     🔧 設定ファイルの追加/更新',
      value: ':wrench: chore',
    },
    {
      name: 'chore:     🔨 開発スクリプトの追加/更新',
      value: ':hammer: chore',
    },
    {
      name: 'chore:     🧑‍💻 開発者体験向上',
      value: ':technologist: chore',
    },
    {
      name: 'ci:        👷 CIビルドシステムの追加/更新',
      value: ':construction_worker: ci',
    },
    {
      name: 'package:   📌 依存関係を特定のバージョンに固定',
      value: ':pushpin: package',
    },
    {
      name: 'package:   📦 パッケージの追加/更新',
      value: ':package: package',
    },
    {
      name: 'release:   🚀 リリース',
      value: ':rocket: release',
    },
    {
      name: 'WIP:       🚧 作業途中',
      value: ':construction: WIP',
    },
  ],
  messages: {
    type: 'コミットの種類（型）を選択してください:\n',
    subject: 'コミットメッセージを入力してください:\n',
    body: '変更内容の詳細を入力してください:（enterでスキップ）\n',
    breaking: '破壊的変更がある場合は説明してください:（enterでスキップ）\n',
    footer: '関連するチケットや課題があれば番号を入力してください（例: #123）:（enterでスキップ）\n',
    confirmCommit: '上記の内容でコミットを行いますか？(Y/n)\n',
  },
  allowBreakingChanges: [':sparkles: feat', ':zap: perf', ':art: improve', ':bug: fix', ':ambulance: hotfix'],
  skipQuestions: ['scope'],
  subjectLimit: 100,
};

module.exports = config;
