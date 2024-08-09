"use client"
import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

export default async function SingleBlogPage() {
  const router = useRouter();
  const SearchParams = useSearchParams();
  const id = SearchParams.get('postid')

  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );

  const postdata = await response.data;

  return (
    <div className='text-white'>
      <h1>Title: {postdata.title}</h1>
      <p>Description: {postdata.body}</p>
    </div>
  )
}
