"use client";
import Link from "next/link";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"




export default function ProfilePost() {


    const router = useRouter();
    const [error, setError] = useState<string | null>(null); // State for error message
    const [showAlert, setShowAlert] = useState(false);
    const [post, setPost] = React.useState({
        profileName: "",
        realName: "",
        platform: "",
        userAge: 10,
        fakeProbability: 50,
        botProbability: 50,
        comment: "",
        profilePurpouse: "",
        politicalPosition: 50,
        privacy: "public",
        URLprofile: ""


    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onPost = async () => {
        let response;
        try {
            setLoading(true);
            response = await axios.post("/api/users/createpost", post);
            console.log("The status is " + response.status)
            router.push("/SearchPage")
        } catch (error: any) {
            console.log("Post failed" + error);
            setError(response?.data.message || "An error occurred"); // Set error message
            setShowAlert(true); // Show alert
            setTimeout(() => {
                setShowAlert(false);
                setError(null);
            }, 3000);
        } finally {
            setLoading(false);
        }

    };

    useEffect(() => {
        if (post.profileName.length > 0 && post.platform.length > 0 && post.comment.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [post]);

    function setProfilePoliticalOpinion(positionInPercentage: number) {

        if (positionInPercentage <= 100 && positionInPercentage >= 80) {
            return <p className=" text-blue-600">Extreme Right Wing</p>
        } else if (positionInPercentage < 80 && positionInPercentage >= 60) {
            return <p className=" text-blue-400">Right Wing</p>
        } else if (positionInPercentage < 60 && positionInPercentage >= 40) {
            return <p className=" text-grey">Reasonable wing</p>
        } else if (positionInPercentage < 40 && positionInPercentage >= 20) {
            return <p className=" text-red-400">Left Wing</p>
        } else if (positionInPercentage < 20 && positionInPercentage >= 0) {
            return <p className=" text-red-600">Extreme Left Wing</p>
        }


    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            {showAlert && (
                <Alert variant="destructive" className="animate-bounce">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>ERROR PLEASE REVIEW FORM</AlertTitle>
                    <AlertDescription>
                        {error}
                    </AlertDescription>
                </Alert>
            )}

            <h1>{loading ? "Processing" : "Signup"}</h1>
            <hr />
            <label htmlFor="profileName">Profile Name</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="profileName"
                type="text"
                value={post.profileName}
                onChange={(e) => setPost({ ...post, profileName: e.target.value })}
                placeholder="Real Name"
                required
            />

            <label htmlFor="realName">Real Name</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="realName"
                type="text"
                value={post.realName}
                onChange={(e) => setPost({ ...post, realName: e.target.value })}
                placeholder="Real Name"
            />




            <label htmlFor="platform">Platform</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="platform"
                list="platformList"

                onChange={(e) => setPost({ ...post, platform: e.target.value })}
                placeholder="Platform"
            />
            <datalist className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="platformList"
            >
                <option value="x"></option>
                <option value="facebook"></option>
                <option value="youtube"></option>
                <option value="instagram"></option>
                <option value="tikTok"></option>
            </datalist>


            <label htmlFor="userAge">User Age : {post.userAge} years</label>
            <input
                className="appearance-none accent-white accent-border-2 border bg-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-white-600 text-black"
                id="userAge"
                type="range"
                min="0"
                max="100"

                value={post.userAge}
                onChange={(e) => setPost({ ...post, userAge: parseInt(e.target.value) })}
                placeholder="User Age"
            />

            <label htmlFor="fakeProbability">Fake Probability : {post.fakeProbability}%</label>
            <input
                className="appearance-none accent-white accent-border-2 border bg-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-white-600 text-black"
                id="fakeProbability"
                type="range"
                min="0"
                max="100"
                value={post.fakeProbability}
                onChange={(e) => setPost({ ...post, fakeProbability: parseInt(e.target.value) })}
                placeholder="Fake Probability"
            />

            <label htmlFor="botProbability">Bot Probability: {post.botProbability}%</label>
            <input
                className="appearance-none accent-white accent-border-2 border bg-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-white-600 text-black"
                id="botProbability"
                type="range"
                min="0"
                max="100"
                value={post.botProbability}
                onChange={(e) => setPost({ ...post, botProbability: parseInt(e.target.value) })}
                placeholder="Bot Probability"
            />

            <label htmlFor="comment">Comment</label>
            <textarea
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="comment"
                value={post.comment}
                onChange={(e) => setPost({ ...post, comment: e.target.value })}
                placeholder="Comment"
            ></textarea>

    

            <label htmlFor="profilePurpouse">Profile Purpose</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="profilePurpouse"
                list="purpouseList"

                
                onChange={(e) => setPost({ ...post, profilePurpouse: e.target.value })}
                placeholder="Profile Purpose"
            />
            <datalist className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="purpouseList"
            >
                <option value="Business"></option>
                <option value="Casual"></option>
                <option value="Bot Ads"></option>
                <option value="Digital Marketing"></option>
                <option value="Other"></option>
            </datalist>

            <label htmlFor="politicalPosition">Political Position {setProfilePoliticalOpinion(post.politicalPosition)}</label>
            <input
                className="appearance-none accent-white accent-border-2 border bg-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-white-600 text-black"
                id="politicalPosition"
                type="range"
                min="0"
                max="100"
                value={post.politicalPosition}
                onChange={(e) => setPost({ ...post, politicalPosition: parseInt(e.target.value) })}
                placeholder="Political Position"
            />







            <label htmlFor="URLprofile">Link to Profile</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="URLprofile"
                type="url"
                value={post.URLprofile}
                onChange={(e) => setPost({ ...post, URLprofile: e.target.value })}
                placeholder="Profile URL"
                required
            />





            <button
                onClick={onPost}
                className="p-2 hover:transition-shadow  border  hover:bg-white hover:text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Make post</button>

        </div>
    )





}