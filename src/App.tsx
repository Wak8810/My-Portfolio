// App.tsx
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import PortfolioItem from './components/PortfolioItem';

// 画像をインポート
import QuizAppImg from './Images/quiz_bazzar.png';
import TwitteryImg from './Images/twittery.png';
import ReactTodoImg from './Images/React-Todo.png';
import SlidepuzzleImg from './Images/Slidepuzzle-react.png';
import AirocoNotifyImg from './Images/Airoco-Notify.png';

const App: React.FC = () => {
  const works = [
    {
      imageSrc: QuizAppImg,
      title: 'クイズバザール',
      description: 'この作品は、3月中旬に参加したイベントで、3泊4日で、チーム開発で作成したものである。主にバックエンド側のルート設計、データベース設計や、Model、Controllerプログラムを作成した。githubのlinkは本体ではなく、コピーしたリポジトリ。',
      link: 'https://quiz-buzzar.kamaly-app.com/',
      github: 'https://github.com/Wak8810/cp_quiz_bazzar',
      frontend: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      backend: ['Ruby on Rails'],
      database: ['SQLite3']
    },
    {
      imageSrc: AirocoNotifyImg,
      title: 'Airoco教室環境チェックシステム',
      description: 'Airocoというサービスを利用して、大学の3箇所の教室からCO2濃度、温度、湿度の情報を取得し、独自の閾値によってスコアを決めてSlackで通知するアプリ。同時にDBにデータを登録して、Web上でも過去のデータを閲覧できるようにした。',
      link: 'https://wak8810.github.io/Airoco_Notify_System/',
      github: 'https://github.com/Wak8810/Airoco_Notify_System',
      frontend: ['React', 'TailwindCSS', 'TypeScript'],
      backend: ['Python'],
      database: ['Supabase(PostgreSQL)']
    },
    {
      imageSrc: TwitteryImg,
      title: 'ツイッター模倣アプリ',
      description: 'この作品は、上記イベントに参加する条件として作成したものである。ツイッター模倣アプリではあるが、投稿、編集、削除などの、最低限の機能しか追加していない。(GitHubリンクのみ)',
      github: 'https://github.com/Wak8810/Twittery_imitation_app',
      frontend: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      backend: ['Ruby on Rails'],
      database: ['SQLite3']
    },
    {
      imageSrc: ReactTodoImg,
      title: 'Todoアプリ',
      description: 'Reactの勉強で作成したTodoアプリ。(追記)6/8に、RailsAPIを使用して、Todoを実際にDBに登録/削除する機能を追加。このアプリはデプロイするほどの物ではないと思ったため、Pagesでの公開も中止したが、開発環境でのDBへの登録は成功した。リンクは、動画での説明である。',
      link: 'https://youtu.be/4xmjev8cVrI',
      github: 'https://github.com/Wak8810/React-TodoList',
      frontend: ['React', 'TailwindCSS', 'TypeScript'],
      backend: ['Ruby on Rails'],
      database: ['SQLite3']
    },
    {
      imageSrc: SlidepuzzleImg,
      title: '8パズル・15パズル',
      description: 'スライドパズルを作成してみた。',
      link: 'https://wak8810.github.io/slidepuzzles-react/',
      github: 'https://github.com/Wak8810/slidepuzzles-react',
      frontend: ['React', 'TailwindCSS', 'TypeScript']
    },
  ];

  return (
    <div className="pt-20 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow px-4 max-w-6xl mx-auto space-y-16" id="works">
        {works.map((work, index) => (
          <PortfolioItem
            key={index}
            imageSrc={work.imageSrc}
            title={work.title}
            description={work.description}
            link={work.link}
            github={work.github}
            frontend={work.frontend}
            backend={work.backend}
            database={work.database}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
