export default async function CommentDetailPage({
  params,
}: {
  params: Promise<{ id: string; commentId: string }>;
}) {
  const { id, commentId } = await params;
  return (
    <>
      <h1>
        {id} / {commentId}
      </h1>
    </>
  );
}
