import * as React from "react";

export default function Twitter() {
  return (
    <>
      <div className="mt-4 flex justify-center">
        <blockquote
          className="twitter-tweet"
          data-lang="en"
          data-width="500" // Adjust the width as needed
        >
          <p lang="en" dir="ltr">
            Yesterday, LA City Council voted 12-3 to approve the new LAPD
            Contract for officers (Lieutenant & below):
            <br />
            <br />
            • This will cost taxpayers an additional $994M over 4 years
            <br />
            <br />A question brought up was how much do LAPD officers
            (Lieutenant & below) make compared to other City Employees?
            <a href="https://t.co/aJfrcXQ0KQ">pic.twitter.com/aJfrcXQ0KQ</a>
          </p>
          &mdash; LA City Controller Kenneth Mejia (@lacontroller){" "}
          <a href="https://twitter.com/lacontroller/status/1694786662839242891?ref_src=twsrc%5Etfw">
            August 24, 2023
          </a>
        </blockquote>
        <script async src="https://platform.twitter.com/widgets.js"></script>
      </div>
      <div className="mt-4 flex justify-center">
        <blockquote className="twitter-tweet" data-lang="en" data-width="500">
          <p lang="en" dir="ltr">
            💰 LAPD&apos;S NEW CONTRACT (Lieutenants & below) will be voted on
            tomorrow by City Council:
            <br />
            <br />
            - $994M in additional costs over 4 years including 123M in
            additional costs to an already increased police budget this fiscal
            year
            <br />
            <br />- New recruits starting salary: $86,193 vs current $74,020
          </p>
          &mdash; LA City Controller Kenneth Mejia (@lacontroller){" "}
          <a href="https://twitter.com/lacontroller/status/1694174047234650588?ref_src=twsrc%5Etfw">
            August 23, 2023
          </a>
        </blockquote>
        <script async src="https://platform.twitter.com/widgets.js"></script>
      </div>
    </>
  );
}
