// App.tsx
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import PortfolioItem from './components/PortfolioItem';

// 画像をインポート
import QuizAppImg from './Images/quiz_bazzar.png';
import TwitteryImg from './Images/twittery.png';
import ReactTodoImg from './Images/React-Todo.png';

const App: React.FC = () => {
  const works = [
    {
      imageSrc: QuizAppImg,
      title: 'クイズバザール',
      description: 'この作品は、3月中旬に参加したイベントで、3泊4日で、チーム開発で作成したものである。使用技術はRailsとBootstrapで、主にバックエンド側のルート設計、データベース設計や、Model、Controllerプログラムを作成した。githubのlinkは本体ではなく、コピーしたリポジトリ。',
      link: 'https://quiz-buzzar.kamaly-app.com/',
      github: 'https://github.com/Wak8810/cp_quiz_bazzar'
    },
    {
      imageSrc: TwitteryImg,
      title: 'ツイッター模倣アプリ',
      description: 'この作品は、上記イベントに参加する条件として作成したものである。ツイッター模倣アプリではあるが、投稿、編集、削除などの、最低限の機能しか追加していない。(GitHubリンクのみ)',
      github: 'https://github.com/Wak8810/Twittery_imitation_app',
    },
    {
      imageSrc: ReactTodoImg,
      title: 'ReactTodoアプリ',
      description: 'Reactの勉強で作成したTodoアプリ。React + TailwindCSS + TypeScriptで作成した。',
      link: 'https://wak8810.github.io/React-TodoList/',
      github: 'https://github.com/Wak8810/React-TodoList'
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
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
