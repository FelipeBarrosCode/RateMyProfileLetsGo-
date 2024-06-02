"use client"
import { useEffect, useState } from "react";
import PageIcon from "./PageComponent"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LoadingIcon from "../ui/Loader";
import FooterToUseOnIntro from "../ui/Footer";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import HeaderToUseOnAccount from "../ui/HeaderInAccount";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//     PaginationItem,
//     PaginationLink,
//     PaginationNext,
//     PaginationPrevious,
//   } from "@/components/ui/pagination"

interface ProfileData {
  profileName: string,
  realLifeName: string,
  platformThatProfileIsIn: string,
  age: number,
  chanceOfFake: number,
  chanceOfBot: number,
  commentsAboutProfile: string[],
  profilePurpouse: string,
  politicalPosition: number,
  profileLinkURL: string,
  listOfVoterUserName: Map<any, any>,
  _id: string,
  _v: any

}




export default function PageTest() {

  let [amountToBeParsed, setAmountToBeParsed] = useState(9)
  const [dataToBefetched, setData] = useState<ProfileData[]>()
  const [inputField, setInput] = useState<string>("")
  const [dataToBeHandled, setHandle] = useState<ProfileData[]>()
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(amountToBeParsed);

  

  const fetchData = async () => {
    const fetchDataFromUser = await fetch("http://localhost:3000/api/users/searchForProfile").then((data) => {
      if (data.ok) {
        data.json().then((content) => {
          setData(content.contentFetched)
          setHandle(content.contentFetched)
          console.log(content.contentFetched)
        }).then((data) => {
          console.log(dataToBefetched)
        })


      }
    })

  }


  useEffect(() => {
    fetchData()
  }, [])


  useEffect(() => {

    if (inputField == "") {
      setHandle(dataToBefetched)
    } else if (inputField.length > 0) {
      setHandle(dataToBeHandled?.filter((content) => {
        return content.profileName.toLowerCase().includes(inputField.toLowerCase())

      }))
    }



  }, [inputField, dataToBefetched, dataToBeHandled])

  useEffect(() => {
    console.log("data fetched is" + dataToBeHandled?.at(0)?.age)

  }, [dataToBeHandled])
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here, set the new input value using the value in the input field
    const newInputValue = (document.getElementById('filtering') as HTMLInputElement).value;
    setInput(newInputValue);
    console.log("Current input value:", newInputValue);
  };

  return (
    <div className="flex flex-col gap-3 overflow-x-hidden">

        <HeaderToUseOnAccount/>
      <div className="flex flex-row gap-3 justify-center pl-4 pr-4 items-center w-screen">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-screen">

          <input className="w-9/12 h-12 text-lg" type="text" id="filtering" placeholder="Search For User" value={inputField} onChange={(e) => { setInput(e.target.value) }} />
        </form>

      </div>
      <div className="flex flex-row flex-wrap w-screen justify-center items-center gap-4 pl-4 pr-4">

      
        {dataToBeHandled ? (
          <>
            {dataToBeHandled.slice(startIndex,endIndex).map((profile, key) => (
              // eslint-disable-next-line react/jsx-key
              <PageIcon profileName={profile.profileName} realLifeName={profile.realLifeName} platformThatProfileIsIn={profile.platformThatProfileIsIn} age={profile.age} chanceOfFake={profile.chanceOfFake} chanceOfBot={profile.chanceOfBot} commentsAboutProfile={profile.commentsAboutProfile} profilePurpouse={profile.profilePurpouse} politicalPosition={profile.politicalPosition} profileLinkURL={profile.profileLinkURL} listOfVoterUserName={profile.listOfVoterUserName} _id={key} _v={profile._v} />
            ))}
          </>
        ) : (

          <LoadingIcon />
        )}


        <Pagination >
          <PaginationContent className="cursor-pointer">
            <PaginationItem>
              <PaginationPrevious
                className={
                  startIndex === 0 ? "pointer-events-none opacity-50" : undefined
                }
                onClick={() => {
                  setStartIndex(startIndex - amountToBeParsed);
                  setEndIndex(endIndex - amountToBeParsed);
                }} />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext
                className={
                  endIndex === 100 ? "pointer-events-none opacity-50" : undefined
                }
                onClick={() => {
                  setStartIndex(startIndex + amountToBeParsed); 
                  setEndIndex(endIndex + amountToBeParsed); 
                }} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>


        <FooterToUseOnIntro />
      </div>
    </div>
  );





}