const PageMessages = ({ params }: { params: { pageId: string } }) => {
  const pageId = params.pageId;

  return (
    <div>
      <h1>{pageId}</h1>
    </div>
  );
};

export default PageMessages;
