import React from "react";
import Head from 'next/head'
import { Grid } from 'semantic-ui-react';
import ProductItem from "@/components/WorkProject";
import  "@/styles/Home.module.css"
export default function Home() {

  return (
    <>
      <Head>
        <title>Cart</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero">
        <h1>INDY LASER DESIGNS</h1>
      </section>
      <Grid centered>
        <Grid.Row columns={1}>
          <h1>No Items In Cart.</h1>
        </Grid.Row>
        <Grid.Row columns={1}>
          <p>You currently have no items in your cart at this time. Please add some items to proceed to checkout.</p>
        </Grid.Row>
      </Grid>  
    </>
  )
}