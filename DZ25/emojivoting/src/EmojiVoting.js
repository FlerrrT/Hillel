import React, { useState, useEffect } from "react";

function Emoji({ emoji, votes, onVote }) {
    return (
        <span
            onClick={() => onVote(emoji)}
            style={{
                fontSize: "50px",
                margin: "20px",
                cursor: "pointer",
            }}
        >
            {emoji} ({votes})
        </span>
    );
}

function EmojiVoting() {
    const initialVotes = [
        { id: 1, emoji: "😊", votes: 0 },
        { id: 2, emoji: "😂", votes: 0 },
        { id: 3, emoji: "😎", votes: 0 },
        { id: 4, emoji: "🥳", votes: 0 },
        { id: 5, emoji: "😡", votes: 0 },
    ];

    const [votes, setVotes] = useState(() => {
        const savedVotes = localStorage.getItem("emojiVotes");
        return savedVotes ? JSON.parse(savedVotes) : initialVotes;
    });

    const [winner, setWinner] = useState("");

    useEffect(() => {
        localStorage.setItem("emojiVotes", JSON.stringify(votes));
    }, [votes]);

    const handleVote = (emoji) => {
        setVotes((prevVotes) =>
            prevVotes.map((item) =>
                item.emoji === emoji ? { ...item, votes: item.votes + 1 } : item
            )
        );
    };

    const showResults = () => {
        const maxVotes = Math.max(...votes.map((item) => item.votes));
        const winnerEmoji = votes.find((item) => item.votes === maxVotes);

        if (maxVotes > 0) {
            setWinner(`Переможець: ${winnerEmoji.emoji} з ${maxVotes} голосами!`);
        } else {
            setWinner("Немає голосів.");
        }
    };

    const clearResults = () => {
        localStorage.removeItem("emojiVotes");
        setVotes(initialVotes);
        setWinner("Результати очищені.");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Vote for your favorite emoji!</h1>
            <div>
                {votes.map((item) => (
                    <Emoji
                        key={item.id}
                        emoji={item.emoji}
                        votes={item.votes}
                        onVote={handleVote}
                    />
                ))}
            </div>
            <div>
                <button
                    onClick={showResults}
                    style={{
                        padding: "10px 20px",
                        marginRight: "10px",
                        fontSize: "16px",
                    }}
                >
                    Show Results
                </button>
                <button
                    onClick={clearResults}
                    style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                    }}
                >
                    Очистити результати
                </button>
            </div>
            <div style={{ marginTop: "30px", fontSize: "24px" }}>{winner}</div>
        </div>
    );
}

export default EmojiVoting;