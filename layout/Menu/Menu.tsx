import React, {useContext} from "react";
import cn from "classnames";
import Link from "next/link";

import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItem, PageItem} from "../../interfaces/menu.interface";
import {TopLevelCategory} from "../../interfaces/page.interface";

import CoursesIcon from "./icons/courses.svg";
import ServicesIcon from "./icons/services.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";

import styles from "./Menu.module.css";

const firstLevelMenu: FirstLevelMenuItem[] = [
  {route: "courses", name: "Курси", icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
  {route: "services", name: "Сервіси", icon: <ServicesIcon/>, id: TopLevelCategory.Services},
  {route: "books", name: "Книги", icon: <BooksIcon/>, id: TopLevelCategory.Books},
  {route: "products", name: "Продукти", icon: <ProductsIcon/>, id: TopLevelCategory.Products},
]

const Menu = (): JSX.Element => {
  const {menu, setMenu, firstCategory} = useContext(AppContext);
  const buildFirstLevel = () => {
    return <>
      {firstLevelMenu.map(m => (
        <div key={m.route}>
          <Link href={`/${m.route}`}>
            <a>
              <div className={cn(styles.first_level, {
                [styles.first_level__active]: m.id === firstCategory
              })}>
                {m.icon}
                <span>{m.name}</span>
              </div>
            </a>
          </Link>
          {m.id === firstCategory && buildSecondLevel(m.route)}
        </div>
      ))}
    </>
  }

  const buildSecondLevel = (route: string) => {
    return (
      <div className={styles.second_block}>
        {menu.map(m => (
          <div key={m._id.secondCategory}>
            <div className={cn(styles.second_level)}>{m._id.secondCategory}</div>
            <div className={cn(styles.second_level__block, {
              [styles.second_level__block__opened]: m.isOpened,
            })}>{buildThirdLevel(m.pages, route)}</div>
          </div>
        ))}
      </div>
    )
  }

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      pages.map(page => (
        <Link href={`/${route}/${page.alias}`} key={page.title}>
          <a className={cn(styles.third_level, {
            [styles.third_level__active]: false
          })}>
            {page.category}
          </a>
        </Link>
      )))
  }

  return (
    <div className={styles.menu}>
      {buildFirstLevel()}
    </div>
  )
}

export default Menu;