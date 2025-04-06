import { useState } from "react";
const Team = () => {

   
    const sections = [
      {
        title: "Final Year",
        members: [
          {
            name: "Amanjyoti Mullick",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730924689/post%20bearers/p2ovs3l6oadta0f72xoq.jpg",
            designation: "President",
            linkedin: "https://www.linkedin.com/in/amanjyoti-mullick-53376122b",
            insta: "n/a"
          },
          {
            name: "Shayoni Mahato",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730924689/post%20bearers/ykyljv9quawf9qdjiihl.jpg",
            designation: "Vice President",
            linkedin: "https://www.linkedin.com/in/shayoni-mahato-bba1b6241",
            insta: "https://www.instagram.com/shayoni_3"
          },
          {
            name: "Balli Chanukya",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730924687/post%20bearers/hsmeaov6ztrhhbnbjctt.jpg",
            designation: "General Secretary",
            linkedin: "https://www.linkedin.com/in/balli-chanukya-52191123a",
            insta: "https://www.instagram.com/chanukya_balli"
          },
          {
            name: "Arindam Chatterjee",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730924687/post%20bearers/wgd89kof6ash0jzwzmxh.jpg",
            designation: "Assistant General Secretary",
            linkedin: "https://www.linkedin.com/in/aric21",
            insta: "https://www.instagram.com/arindam_ct?igsh=eGg3dXhmdThhbW5h"
          },
          {
            name: "Soumik Roy Chowdhury",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730924688/post%20bearers/q3hh4avon9rlihzcqxjm.jpg",
            designation: "Treasurer",
            linkedin: "https://www.linkedin.com/in/soumikrc08",
            insta: "https://www.instagram.com/soumikrcdeep?igsh=OW45bHE2cmd5ZmNj"
          },
          {
            name: "T.V.N.S. Praveen",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730924688/post%20bearers/fc6v8wlwc5d3hudil1qi.jpg",
            designation: "Joint Treasurer",
            linkedin: "https://www.linkedin.com/in/praveen-t-v-n-s-5393ab223",
            insta: "https://www.instagram.com/p_r_a_v_e_e_n_t_h_o_t_a?igsh=MXhwM3FzMzE3dDNsbA=="
          },
          {
            name: "Satyaki Chaudhuri",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730924690/post%20bearers/jbjuktjkbasu0jqjlsj4.jpg",
            designation: "Convenor",
            linkedin: "https://www.linkedin.com/in/satyaki-chaudhuri-a18183224",
            insta: "https://www.instagram.com/sat__cha"
          },
          {
            name: "Sai Kiran",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730924690/post%20bearers/pboacl48gtirytlsgssa.jpg",
            designation: "Graphic Designing Head",
            linkedin: "https://www.linkedin.com/in/sai-kiran-k-938b81235",
            insta: "https://www.instagram.com/_itskkiran"
          },
          {
            name: "Rounak Sarkar",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730924687/post%20bearers/gmt4lequbjnz0ecrsqjf.jpg",
            designation: "Graphic Designing Head",
            linkedin: "https://www.linkedin.com/in/rounaksarkar360",
            insta: "https://www.instagram.com/rounak_396"
          },
          {
            name: "Sneha Ghosh",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730924689/post%20bearers/dwtw4uop6ntr5qraelby.jpg",
            designation: "Content Head",
            linkedin: "https://www.linkedin.com/in/sneha-g-521019230",
            insta: "https://www.instagram.com/sneha.g.15"
          },
          {
            name: "Abheerup Sarkar",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730924688/post%20bearers/lbjanawjbwnmxkbigujz.jpg",
            designation: "Content Head",
            linkedin: "https://www.linkedin.com/in/abheerup-sarker-202a6a236",
            insta: "https://www.instagram.com/abheerup_sarker"
          },
          {
            name: "Soumyadip Debnath",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730924687/post%20bearers/mi4a2zccl57xogtbpkba.jpg",
            designation: "Event Head",
            linkedin: "https://www.linkedin.com/in/soumyadip-debnath",
            insta: ""
          },
          {
            name: "Samanvita",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730924688/post%20bearers/xnxv8jrmnkpfjgqmeznz.jpg",
            designation: "Publicity Head",
            linkedin: "https://www.linkedin.com/in/samanvita-macherla-091728241",
            insta: "https://www.instagram.com/jst__sam"
          },
          {
            name: "N.Surya Hemanth",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730924687/post%20bearers/qa8folekeqp3mtsdohea.jpg",
            designation: "Social Media Head",
            linkedin: "https://www.linkedin.com/in/suryahemanth-narsupalli",
            insta: "https://www.instagram.com/suryahemanth.n"
          },
          {
            name: "Satish Abbadasari",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730924690/post%20bearers/irysnmsnde9iyletii04.jpg",
            designation: "Social Media Head",
            linkedin: "https://www.linkedin.com/in/satish-abbadasari-065359270",
            insta: "https://www.instagram.com/satish_3043"
          },
          {
            name: "Arnab Nath",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730924689/post%20bearers/o9aic9t1kd2rvemxix2f.jpg",
            designation: "Web Development Head",
            linkedin: "https://www.linkedin.com/in/arnabnath01",
            insta: "https://www.instagram.com/arnab_nath_01"
          },
          {
            name: "Sudipta Das",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730924689/post%20bearers/ktzpouqwurdzpzav7h3b.jpg",
            designation: "Web Development Head",
            linkedin: "https://www.linkedin.com/in/sudipta-das-128b70252",
            insta: "https://www.instagram.com/sudipta_d.insta"
          },
          {
            name: "Nikhil Kumar",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730924688/post%20bearers/mtk7yatxzy4e0ed9pb7p.jpg",
            designation: "Video Editing Head",
            linkedin: "https://www.linkedin.com/in/nikhil-kumar-860034236",
            insta: "https://www.instagram.com/nikhil_raghvan"
          }
        ]
      },
      {
        title: "Pre-Final Year",
        members: [
          {
            name: "Bikarna Baidya",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730922392/executive%20members/kmazi9lifztai9lbbshm.jpg",
            designation: "Senior Executive Member",
            linkedin: "https://www.linkedin.com/in/bikarna-baidya-09a13a282",
            insta: "https://www.instagram.com/bikarna_21"
          },
          {
            name: "Bushra Saad",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730972048/nekrtxkb5kej580ec6gj.jpg",
            designation: "Senior Executive Member",
            linkedin: "https://www.linkedin.com/in/bushra-saad",
            insta: ""
          },
          {
            name: "Debson Mahato",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730973758/uhspyaik3qcch5eia6po.jpg",
            designation: "Senior Executive Member",
            linkedin: "http://www.linkedin.com/in/debsonmahato",
            insta: "https://www.instagram.com/debsonmahato"
          },
          {
            name: "Kanikicharla Bala Ganesh",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730922415/executive%20members/dehnvar4orc5nj8kiwxq.jpg",
            designation: "Senior Executive Member",
            linkedin: "https://www.linkedin.com/in/kanikicharla-bala-ganesh-889b69275",
            insta: "https://www.instagram.com/kbganesh_04"
          },
          {
            name: "Katharavath Navya",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730922392/executive%20members/godco85z3uqtthnljfuz.jpg",
            designation: "Senior Executive Member",
            linkedin: "https://www.linkedin.com/in/katravath-navya-164244276",
            insta: "https://www.instagram.com/navyabankatlaxmi"
          },
          {
            name: "Pappu Sharmila",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730922392/executive%20members/ixj7ovfmwjm5opgwha0a.jpg",
            designation: "Senior Executive Member",
            linkedin: "https://www.linkedin.com/in/sharmila-p-84429b263",
            insta: "https://www.instagram.com/sh_armila9518"
          },
          {
            name: "Pratishtha Barua",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730922394/executive%20members/ja6oplur1wpw9xoa7p4v.jpg",
            designation: "Senior Executive Member",
            linkedin: "https://www.linkedin.com/in/pratishtha-barua-06a371285",
            insta: "https://www.instagram.com/pratishthabarua_"
          },
          {
            name: "Rahul Mondal",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730922392/executive%20members/jzkimvwnsczvpep7dti8.jpg",
            designation: "Senior Executive Member",
            linkedin: "https://www.linkedin.com/in/rahul-mondal-596a15261",
            insta: "https://www.instagram.com/rahul730"
          },
          {
            name: "Reshmi Ghosh",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730922390/executive%20members/xl8sp1jafr5hantranlc.jpg",
            designation: "Senior Executive Member",
            linkedin: "https://www.linkedin.com/in/reshmi-saha-0386a9275",
            insta: "https://www.instagram.com/r.e.s.h.m.i__12"
          },
          {
            name: "Sai Kumar Adireddi",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730922392/executive%20members/xu8loyazjyou2uqy44cq.jpg",
            designation: "Senior Executive Member",
            linkedin: "https://www.linkedin.com/in/sai-kumar-adireddi-1580b0236",
            insta: "https://www.instagram.com/_s_k_a_31"
          },
          {
            name: "Sanjib Maity",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730922390/executive%20members/c6d1pb2q9yc0htgxutuw.jpg",
            designation: "Senior Executive Member",
            linkedin: "https://www.linkedin.com/in/sanjib-speaks",
            insta: "https://www.instagram.com/sanjib_speaks"
          },
          {
            name: "Sathish Kumar Panduru",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730973988/xd0ir6opce7mfqtin45c.jpg",
            designation: "Senior Executive Member",
            linkedin: "https://www.linkedin.com/in/satish-panduru-55652b261",
            insta: "https://www.instagram.com/satish_panduru"
          },
          {
            name: "Souhardya Majumder",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730922389/executive%20members/xojiuaxub3ymwrob8f5s.png",
            designation: "Senior Executive Member",
            linkedin: "https://www.linkedin.com/in/souhardya-majumder-431231251",
            insta: "https://www.instagram.com/soum2082"
          },
          {
            name: "Soumi Ghosh",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730922397/executive%20members/avgqeraibbnxvpvtfon1.jpg",
            designation: "Senior Executive Member",
            linkedin: " https://www.linkedin.com/in/soumi-ghosh-288816274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
            insta: " https://www.instagram.com/soumi_803?igsh=MWt3NjloN2JoNnBnYw== "
          },
          {
            name: "Soumili Ghosh",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730922390/executive%20members/oxgwfrvkcdqpmucqmxsv.jpg",
            designation: "Senior Executive Member",
            linkedin: " https://www.linkedin.com/in/soumili-ghosh-386825274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
            insta: " https://www.instagram.com/smili_1402?igsh=MWs2aXpxZnpuZjRxdQ== "
          },
          {
            name: "Supriyo Mondal",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730922394/executive%20members/lcqd0cbx9hjmm7zk6x7v.jpg",
            designation: "Senior Executive Member",
            linkedin: "https://www.linkedin.com/in/supriyo-mondal-886a58268",
            insta: "https://www.instagram.com/supriyo7439"
          },
          {
            name: "Swarnim Suryansh",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730922394/executive%20members/y0xqdghdp9oqosvgsdin.jpg",
            designation: "Senior Executive Member",
            linkedin: "https://www.linkedin.com/in/swarnim-suryansh-b42b7b189",
            insta: "https://www.instagram.com/swarnim_475"
          },
          {
            name: "Uppada Sravanthi",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730922394/executive%20members/yaj7wtkuyshi7tta0duq.jpg",
            designation: "Senior Executive Member",
            linkedin: "https://www.linkedin.com/in/sravanthi-uppada-558b65275",
            insta: "https://www.instagram.com/sravanthi_91401"
          },
          {
            name: "Vishal Gupta",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730922393/executive%20members/oqscyp52phm8lekhfyvn.jpg",
            designation: "Senior Executive Member",
            linkedin: "https://www.linkedin.com/in/vishal-gupta-7a7953255",
            insta: "https://www.instagram.com/professsor._.sigma"
          }
        ]
      },
      {
        title: "Second Year",
        members: [
          {
            name: "Anagh Sinha",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730916386/Anagh_Sinha_g924wh.jpg",
            designation: "Executive Member",
            linkedin: "https://www.linkedin.com/in/anagh-sinha-263969301",
            insta: "n/a"
          },
          {
            name: "Aparup Goswami",
            img: "./aparup.jpg",
            designation: "Executive Member",
            linkedin: "https://www.linkedin.com/in/aparup-goswami-053b4927b",
            insta: "https://www.instagram.com/aparup._14"
          },
          {
            name: "Avisikta Mandal",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730918955/members/gg6llrpqatb8fkxhaa0l.jpg",
            designation: "Executive Member",
            linkedin: "https://www.linkedin.com/in/avisikta-mandal-98406030a",
            insta: "https://www.instagram.com/avisikta__mandal"
          },
          {
            name: "Galipelly Sriram",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730918955/members/fhsqwm337y4db0rfkt3u.jpg",
            designation: "Executive Member",
            linkedin: "https://www.linkedin.com/in/galipelly-sriram-371872293",
            insta: "https://www.instagram.com/galipelly_sriram"
          },
          {
            name: "Jaswika Mithram Kilaru",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730918954/members/nztz9vanfrexhewhiqko.jpg",
            designation: "Executive Member",
            linkedin: "https://www.linkedin.com/in/jaswika-mithram-0a8b34300",
            insta: "https://www.instagram.com/thelaastperson"
          },
          {
            name: "Joys Pakalapati",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743931405/Pakalpati_Joys_didi_g3c1gn.jpg",
            designation: "Executive Member",
            linkedin: "https://www.linkedin.com/in/joy-samuel-1b9246288",
            insta: "https://www.instagram.com/joy_pakalapati"
          },
          {
            name: "Prakash Chandra Das",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743931407/Prakash_bhaiya_tqbabz.jpg",
            designation: "Executive Member",
            linkedin: "https://www.linkedin.com/in/prakash-chandra-das-1a9946301",
            insta: "https://www.instagram.com/prakash__0_3"
          },
          {
            name: "Riya Singh",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743930772/WhatsApp_Image_2025-03-27_at_10.42.26_PM_tz9vhk.jpg",
            designation: "Executive Member",
            linkedin: "https://www.linkedin.com/in/riya-singh-42008730a",
            insta: "https://www.instagram.com/riyasingh_2402"
          },
          {
            name: "Satyake Sadhukhan",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743931404/Satyake_bhaiya_vobdrt.jpg",
            designation: "Executive Member",
            linkedin: "https://www.linkedin.com/in/satyake-sadhukhan-6260a8334",
            insta: "https://www.instagram.com/satyakesadhukhan"
          },
          {
            name: "Shafiya Tasneem Shaik",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743931404/Safiya_didi_uxbe9m.jpg",
            designation: "Executive Member",
            linkedin: "https://www.linkedin.com/in/safiya-tasneem-901667217",
            insta: "https://www.instagram.com/safiya_2358"
          },
          {
            name: "Sourashish Das",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743931406/Sourasish_bhaiya_eqmsej.jpg",
            designation: "Executive Member",
            linkedin: "https://www.linkedin.com/in/sourasishdas",
            insta: "https://www.instagram.com/sourrasish"
          },
          {
            name: "Subhamita Halder",
            img: "https://res.cloudinary.com/dzdb9pahz/image/upload/v1730919898/members/bb4albcginsyokbvtzlh.jpg",
            designation: "Executive Member",
            linkedin: "https://www.linkedin.com/in/subhamita-halder-5699a52b7",
            insta: "https://www.instagram.com/subhamita.bo"
          },
          {
            name: "Tulasi Pottella",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743931404/Tulasi_didi_rgjtku.jpg",
            designation: "Executive Member",
            linkedin: "https://www.linkedin.com/in/tulasi-pottella",
            insta: ""
          },
    {
            name: "Beas",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743960288/WhatsApp_Image_2025-04-06_at_6.11.44_PM_oirypl.jpg",
            designation: "Executive Member",
            linkedin: "https://www.linkedin.com/in/beas-das-00a4b5351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            insta: "https://www.instagram.com/kookoomberriee?igsh=MTY3dXpod29vZTE2OA=="
          },
    
    {
            name: "Piyush Raj",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743931025/WhatsApp_Image_2025-04-06_at_1.48.18_PM_rs2qct.jpg",
            designation: "destruction",
            linkedin: "n/a",
            insta: "https://www.instagram.com/piyush_coolpie?igsh=eDB4NWt3bGU1cDJh"
          },
    
        ]
      },
      {
    title: "First Year",
        members: [
          {
            name: "Afreen Syeda",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743919537/afreen_ipbvsb.jpg",
            designation: "Member",
            linkedin: "https://www.linkedin.com/in/afreen-syeda-20a546326",
            insta: ""
          },
          {
            name: "Anurag Kumar",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743919537/anurag_xzzhsu.jpg",
            designation: "Member",
            linkedin: "https://www.linkedin.com/in/anurag-kumar-7630a2307",
            insta: "https://www.instagram.com/anurag0_08"
          },
          {
            name: "B. Sanjana",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743919534/sanjana_re8mwu.jpg",
            designation: "Member",
            linkedin: "https://www.linkedin.com/in/sanjana-bandhakavi-5a7b63348",
            insta: "https://www.instagram.com/_sanju_795"
          },
          {
            name: "Barla Poojitha",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743919533/poojita_aznr2u.jpg",
            designation: "Member",
            linkedin: "https://www.linkedin.com/in/poojitha-barla-a06aa5350",
            insta: "https://www.instagram.com/poojitha.268"
          },
          {
            name: "Devya Rani Yesmin",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743919531/devya_slrtgb.jpg",
            designation: "Member",
            linkedin: "https://www.linkedin.com/in/devya-rani-yesmin-224364350",
            insta: "https://www.instagram.com/_dv_ya"
          },
          {
            name: "Lokesh Kusumanchi",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743919532/lokesh_eijtkz.jpg",
            designation: "Member",
            linkedin: "https://www.linkedin.com/in/lokesh-kusumanchi-5a6aa1350",
            insta: "https://www.instagram.com/lokessh._.k"
          },
          {
            name: "Naaz Hussain",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743919531/naaz_jnikc9.jpg",
            designation: "Member",
            linkedin: "https://www.linkedin.com/in/naaz-hussain-329452329",
            insta: ""
          },
          {
            name: "Namit Kumar Krrish",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743919536/namit_xaj5yq.jpg",
            designation: "Member",
            linkedin: "https://www.linkedin.com/in/namit-kumar-krrish-1117b6324",
            insta: "https://www.instagram.com/namitkumarkrrish"
          },
          {
            name: "Paila Purna Durga Karthik",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743919531/kartik_pgbl05.jpg",
            designation: "Member",
            linkedin: "https://www.linkedin.com/in/purna-durga-karthik-paila-262321343",
            insta: "https://www.instagram.com/king_.karthik_official"
          },
          {
            name: "Prachi Kedia",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743919734/prachi_aaqdve.jpg",
            designation: "Member",
            linkedin: "",
            insta: "https://www.instagram.com/prachi_kedia07"
          },
          {
            name: "Raghav Maheshwari",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743919532/raghav_tj6xsi.jpg",
            designation: "Member",
            linkedin: "https://www.linkedin.com/in/raghav-maheshwari-163a01309",
            insta: "https://www.instagram.com/raghav_maheshwari08"
          },
          {
            name: "Sambhav Gupta",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743919534/sambhav_i4ikwf.jpg",
            designation: "Member",
            linkedin: "https://www.linkedin.com/in/sambhav-gupta-3a6131346",
            insta: "https://www.instagram.com/sambhavguptanitdgp"
          },
          {
            name: "Sambhav Singh Parmar",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743919533/parmar_bpvjat.jpg",
            designation: "Member",
            linkedin: "https://www.linkedin.com/in/sambhav-singh-parmar-989aa6350",
            insta: "https://www.instagram.com/sambhav_040"
          },
          {
            name: "Sayam Das",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743919538/sayam_ytbbl3.jpg",
            designation: "Member",
            linkedin: "https://www.linkedin.com/in/sayam-das-6565942ba",
            insta: "https://www.instagram.com/_marshmallow_x_01"
          },
          {
            name: "Sayandeep Halder",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743919535/sayandeep_ahyydo.jpg",
            designation: "Member",
            linkedin: "https://www.linkedin.com/in/sayandeep-halder-93759227a",
            insta: "https://www.instagram.com/sa.yan642"
          },
          {
            name: "Shagun Singh",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743919539/shagun_kicxv7.jpg",
            designation: "Member",
            linkedin: "https://www.linkedin.com/in/shagun-singh-455602351",
            insta: "https://www.instagram.com/shagunsinghstm00"
          },
          {
            name: "Vivek Munda",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743919536/vivek_onm9r8.jpg",
            designation: "Member",
            linkedin: "https://www.linkedin.com/in/vivek-munda-413b25290",
            insta: "https://www.instagram.com/vivek2051munda"
          },
          {
            name: "Yash Kumar Singh",
            img: "https://res.cloudinary.com/disucyhiq/image/upload/v1743919536/yash_qcbmb7.jpg",
            designation: "Member",
            linkedin: "https://www.linkedin.com/in/yash-kumar-singh-18843232a",
            insta: "https://www.instagram.com/yashhh2501"
          }
        ]
      }
    ];


    const [currentSection, setCurrentSection] = useState(0);

    return (
        
            <section>
            <div className="mx-auto text-center py-[30vw] lg:py-[10vw] bg-black">
              <h2 className="text-[10vw] lg:text-[3vw] font-bold text-orange-100 mb-[4vw] lg:mb-[0vw]">Meet Our Team</h2>
              <p className="text-white mb-[2vw] lg:mb-[-3vw] lg:text-[2vw] text-[5vw]">
                Our team is composed of talented and dedicated individuals.
              </p>
              <div className="flex flex-col items-center justify-center ">
                <div className="lg:flex flex-wrap shrink-0 lg:space-x-[10vw] mb-[3vw] lg:mb-[-3vw] gap-[1vw]">
                  {sections.map((items, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSection(index)}
                      className=" lg:mt-[5vw] lg:mx-[2vw] mt-[4vw] mx-[2vw] shrink-0 lg:px-[1vw] lg:py-[.5vw] px-[3vw] py-[3vw] bg-orange-300 text-black font-bold rounded-md shadow hover:bg-orange-100 transition "
                    >
                      {items.title}
                    </button>
                  ))}
                </div>
                <div className="w-full flex flex-wrap lg:gap-[5vw] lg:p-[3vw] items-center justify-center gap-[4vw] mt-[3vw]">
                  {sections[currentSection].members.map((member, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center bg-zinc-900 text-white lg:h-[21vw] lg:w-[15vw] gap-1 h-[65vw] w-[45vw]  justify-center lg:gap-[.5vw] lg:rounded-[1vw] rounded-[2vw] shrink-0"
                    >
                      <img
                        src={member.img}
                        alt={member.name}
                        className=" mb-3 object-cover object-top lg:w-[10vw] lg:h-[10vw] h-[25vw] w-[25vw] rounded-full border-2 border-gray-300 shadow-md"
                      />
                      <h3 className="text-center lg:text-[1.3vw] text-[4vw] font-bold">{member.name}</h3>
                      <p className="lg:mt-2 text-center lg:text-[1.1vw] text-[3.5vw] font-semibold text-orange-200">{member.designation}</p>
                      <div className="flex lg:gap-[1vw] lg:text-[1.8vw] text-[6vw] gap-[4vw]">
             <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
    <i className="ri-linkedin-box-fill"></i>
        </a>
  <a href={member.insta} target="_blank" rel="noopener noreferrer">
    <i className="ri-instagram-line"></i>
  </a>
</div>

                    </div>
                  ))}
                </div>
              </div>
            </div>
            </section>
    );
  };

  export default Team;
