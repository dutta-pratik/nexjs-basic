import React from 'react';
import styles from '../../styles/Ninjas.module.css'


export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    return {
      props: { ninjas: data }
    }
  }

const NinjasList = ({ninjas}) => {
    
    return (<><h1>Ninjas List</h1>
    <p>Incididunt sit magna deserunt occaecat. Aute ea tempor ipsum veniam. Labore qui aliqua quis nulla do cupidatat excepteur pariatur laborum incididunt et. Eu duis amet proident laborum labore consectetur esse consectetur sint exercitation ut consequat consequat. Aliquip sint sint incididunt laborum mollit excepteur reprehenderit. Id ex consectetur in aliqua occaecat non dolor.</p>
    {ninjas.map(ninja => (
        <div key={ninja.id}>
          <a className={styles.single}>
            <h3>{ ninja.name }</h3>
          </a>
        </div>
      ))}
    </>);
}
 
export default NinjasList;