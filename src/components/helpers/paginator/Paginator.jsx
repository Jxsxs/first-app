import React from "react";
import classes from './Paginator.module.css'



let Paginator = (props) => {

    let pagesCount = Math.ceil ( props.usersCount / props.pageSize)
            let pages = []
            for(let i=1; i<pagesCount+1;i++){
                pages.push(i)
            };
    return<div className={classes.pages}>
  <div className={classes.scrollContainer}>
    <div className={classes.pageNumbers}>
      {pages.map(el => {
        return <span className={ classes.page || props.currentPage === el && classes.currPage} onClick={(e) => { props.changePage(el) }}>{`[${el}] `}</span>
      })}
    </div>
  </div>
</div>

}

export default Paginator;