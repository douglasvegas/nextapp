import React, { useState,useContext } from 'react';
import styles from './index.module.css';
let classNames = require('classnames')
import MenuContext from '../MenuContext';


const Sidebar = (props) => {
    const {categories, recentPosts} = useContext(MenuContext);
    console.log('categories',categories);
    console.log('recentPosts',recentPosts);
    const [isVisible, setiIsVisible] = useState(false);
    const setVisible = () => {
      setiIsVisible(!isVisible)
    }
    const search = (e) => {
        if(e.keyCode == 13) {
            let s = document.querySelector(`.searchField`).value;
            let url = `/search_v2?s=${s}`;
            let tempWindow = window.open('_blank');
            tempWindow.location = url;
        }
    }
    return (
        <div className = {classNames(styles.pageSidebar, isVisible ? styles.open:'')}>
            <div className = {styles.sideBarBtn} onClick = {setVisible}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className = {styles.sideBarCont}>
                <div className = {styles.sideBarItem}>
                    <input type="search" className = "searchField" placeholder="Search …"  onKeyUp = {search} />
                </div>
                <div className = {classNames(styles.sideBarItem,styles.sideBarItemPadding)}>
                <h2 className = {styles.titleWithUderline}>最近发布</h2>
                <ul>
                    {
                        (recentPosts && recentPosts.length > 0) && recentPosts.map(post => {
                            return (
                                <li
                                    key={post.id} 
                                >
                                    <a href={"/post_v2/" + post.Guid}>
                                        {post.title}
                                    </a>
                                </li>
                            )
                        })
                    }
                    {/* <li>
                    <a href="https://lmpixels.com/wp/leven-wp/2019/12/04/how-to-make-a-wordpress-plugin-extensible/">How to Make a WordPress Plugin Extensible</a>
                    </li>
                    <li>
                    <a href="https://lmpixels.com/wp/leven-wp/2019/12/04/how-to-make-a-wordpress-plugin-extensible/">How to Make a WordPress Plugin Extensible</a>
                    </li>
                    <li>
                    <a href="https://lmpixels.com/wp/leven-wp/2019/12/04/how-to-make-a-wordpress-plugin-extensible/">How to Make a WordPress Plugin Extensible</a>
                    </li>
                    <li>
                    <a href="https://lmpixels.com/wp/leven-wp/2019/12/04/how-to-make-a-wordpress-plugin-extensible/">How to Make a WordPress Plugin Extensible</a>
                    </li>
                    <li>
                    <a href="https://lmpixels.com/wp/leven-wp/2019/12/04/how-to-make-a-wordpress-plugin-extensible/">How to Make a WordPress Plugin Extensible</a>
                    </li> */}
                </ul>
                </div>
                <div className = {classNames(styles.sideBarItem,styles.sideBarItemPadding,styles.mgb80)}>
                <h2 className = {styles.titleWithUderline}>类目</h2>
                <ul>
                {
                    (categories && (categories.length > 0)) && categories.map(res => {
                        return (
                            <li 
                                key={res.EngName}
                            >
                                <a href = {'/category_v2/' + res.EngName}>
                                    { res.name }
                                </a>
                            </li>
                        )
                    })
                    }
                </ul>
                </div>
                
            </div>
            </div>

    )};

export default Sidebar;



