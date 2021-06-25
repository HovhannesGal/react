import React, { useState } from 'react';
import { formatDistance } from 'date-fns';
import { Link } from 'react-router-dom';
import AddComment from './add-comment';

export default function Comments({ docId, comments: allComments, posted, commentInput }) {
    const [comments, setComments] = useState(allComments);
    const [showAllComments ,setShowAllComments] = useState(false)

    const handleShowAllComments = (() =>{
        setShowAllComments(s => !s)
    })
    
    return (
        <>
            <div className="p-4 pt-1 pb-4">
                {comments.length >= 3 && (
                    <p className="text-sm text-gray-500 mb-1 cursor-pointer" onClick= {handleShowAllComments}>
                        {showAllComments ? 'Show Less' : `View all ${comments.length} comments`}
                    </p>
                )}
                {(showAllComments ? comments : comments.slice(0, 3)).map(({comment , displayName: author} ) => (
                    <p key={`${comment}-${author}`} className="mb-1">
                        <Link to={`/p/${author}`}>
                            <span className="mr-1 font-bold">{author}</span>
                        </Link>
                        <span>{comment}</span>
                    </p>
                ))}
                <p className="text-gray uppercase text-xs mt-2">
                    {formatDistance(posted, new Date())} ago
                </p>
            </div>
            <AddComment
                docId={docId}
                comments={comments}
                setComments={setComments}
                commentInput={commentInput}
            />
        </>
    );
}