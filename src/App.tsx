import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/leandrorangel94.png',
      name: 'Leandro Rangel',
      role: 'Desenvolvedor FrontEnd',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋🏽' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-04-23 20:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Desenvolvedor BackEnd',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋🏽' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date("2023-04-25 20:00:00")
  },
]
export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          }
          )
          }
        </main>
      </div>
    </>
  );
}
