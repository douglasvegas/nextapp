import React, { useState } from 'react';
import styles from './index.module.css';
let classNames = require('classnames')


const Whatido = (props) => {
   
    return (
        <div className = {classNames(styles.whatido, styles.mgb30)}>
            <h2 className = {styles.titleWithUderline}>我做什么?</h2>
            <div className = {styles.doingWrap}>
            <div className = {classNames(styles.leftDo, styles.column)}>
                <div>
                    <h4>开发</h4>
                    <p>
                        夜深人静敲代码，那样就会显得不孤独，还会让你大脑觉得你特努力。
                    </p>
                    <p>
                        希望我们可以有很好的交流，造些有趣的轮子，不限于前端。
                    </p>
                </div>
                <div>
                    <h4>运动</h4>
                    <p>
                        泳池人多的时候里不要蝶泳，因为那样会让我呛水。
                    </p>
                    <p>
                        跑步要记得送髋。打乒乓球记得压腕。
                    </p>
                </div>
            </div>
            <div className = {classNames(styles.rightDo, styles.column)}>
                <div>
                    <h4>读书</h4>
                    <p>
                       读了那么多书，还过不好这一生？ 那就继续读吧。
                    </p>
                    <p>
                       喜欢路遥，喜欢余华，喜欢王朔。人生有限，读点经典。
                    </p>
                </div>
                <div>
                    <h4>音乐</h4>
                    <p>
                        带上耳机世界顿时清净，不用听繁杂的叽叽喳喳。
                    </p>
                    <p>
                        没有歌词更让人遐想无限。
                    </p>
                </div>
            </div>
            </div>
        </div>
    )};

export default Whatido;





