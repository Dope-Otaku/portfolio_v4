
const firstPageArticle = async({params}) => {
    const { id } = await params;

  return (
    <div>{`Article ID: ${id}`}</div>
  )
}

export default firstPageArticle