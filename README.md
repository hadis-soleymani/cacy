This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



.container {
  display: flex;
  align-items: center;

  color: $dark-text;
  text-align: center;
  th {
    color: $light_text;
    font-size: 0.9rem;
    font-weight: 500;
    
  }
  tr {
    border-bottom: 1px solid #ebebec;
  
  }
}
.container th:nth-child(1),
.container td:nth-child(2) {
  text-align: left;
}
.container td:nth-child(4) {
  text-align: center;
  height: calc(70px + 2rem);
  @include center;
}
.container td:nth-child(1) {
  width: calc(70px + 1rem);
}
.container table {
  width: 100%;
  border-collapse: collapse;
}

.container td p {
  margin: 0;
}
.container td p:nth-child(2) {
  font-size: 0.7rem;
  color: $light_text;
}
.img {
  background-color: #eeeeee;
  height: 70px;
  width: 70px;
  margin: 1rem 1rem 1rem 0;
  @include center;
}
.icon {
  background-color: #eeeeee;
  padding: 5px;
  border-radius: 50%;
  &:hover {
    background-color: #c8c8c8;
  }
}

@media (max-width:768px){
  
}