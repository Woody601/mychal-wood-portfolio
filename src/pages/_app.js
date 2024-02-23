import React from 'react'
import 'semantic-ui-css/semantic.css'
import styles from '../styles/globals.css'
import "@/styles/styles.module.css"
import {Menu, Icon} from 'semantic-ui-react'
import Link from 'next/link'



export default function App({ Component, pageProps }) {
  return (
    <>
      <Menu fixed='true' className='inverted'>
      <Menu.Item name='mychal wood' as={Link} href='/' />
      <Menu.Menu>
        <Menu.Item name='about' as={Link} href='/about' />
        <Menu.Item name='work' as={Link} href='/work' />
        <Menu.Item name='contact' as={Link} href='/contact' />
      </Menu.Menu>
      </Menu>
      <Component {...pageProps} />
    </>
  )
}
