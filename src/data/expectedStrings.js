const returnedText = {
    headers: {
        allProducts: "ALL PRODUCTS",
        featuredItems: "FEATURES ITEMS",
        recommendedItems: "RECOMMENDED ITEMS",
        womenDresses: "WOMEN - DRESS PRODUCTS",
        womenTops: "WOMEN - TOP PRODUCTS",
        womenSarees: "WOMEN - SAREE PRODUCTS",
        menTShirts: "MEN - T-SHIRT PRODUCTS",
        menJeans: "MEN - JEANS PRODUCTS",
        kidsDresses: "KIDS - DRESS PRODUCTS",
        kidsTopsTshirts: "KIDS - TOPS & T-SHIRTS PRODUCTS"
    },

    brands: {
        polo: "POLO",
        hAndM: "H&M",
        madame: "MADAME",
        mastAndHarbour: "MAST & HARBOUR",
        babyhug: "BABYHUG",
        allenSollyJunior: "ALLEN SOLLY JUNIOR",
        kookieKids: "KOOKIE KIDS",
        biba: "BIBA"
    },

    categories: {
        name: "WOMEN",
        subCategories: {
            dresses: "DRESSES",
            tops: "TOPS",
            sarees: "SAREES"
        },
        name: "MEN",
        subCategories: {
            tShirts: "T-SHIRTS",
            jeans: "JEANS"
        },
        name: "KIDS",
        subCategories: {
            dresses: "DRESSES",
            topsTshirts: "TOPS & T-SHIRTS"
        }
    },

    products: {
        women: {
            dresses: {
                sleevelessDress: {
                    name: "Sleeveless Dress",
                    price: "Rs. 1000"
                },
                stylishDress: {
                    name:"Stylish Dress",
                    price: "Rs. 1500"
                },
                rosePinkMaxi: {
                    name: "Rose Pink Embroidered Maxi Dress",
                    price: "Rs. 2300"
                }
            },
            tops: {
                blueTop: {
                name:"Blue Top",
                price: "Rs. 500"
                },
                winterTop: {
                    name: "Winter Top",
                    price: "Rs. 600"
                },
                summerWhiteTop: {
                    name: "Summer White Top",
                    price: "Rs. 400"
                },
                madameTopWomen: {
                    name: "Madame Top For Women",
                    price: "Rs. 1000"
                },
                fancyGreenTop: {
                    name: "Fancy Green Top",
                    price: "Rs. 700"
                },
                laceTopWomen: {
                    name: "Lace Top For Women",
                    price: "Rs. 1400"
                }
            },
            saree: {
                cottonSilkBlockPrint: {
                    name: "Cotton Silk Hand Block Print Saree",
                    price: "Rs. 3000"
                },
                rustRedLinen: {
                    name: "Rust Red Linen Saree",
                    price: "Rs. 3500"
                },
                peacockBlueCottonLinen: {
                    name: "Beautiful Peacock Blue Cotton Linen Saree",
                    price: "Rs. 5000"
                }
            }     
        },
        men: {
            tShirts: {
                menTshirt: {
                    name: "Men Tshirt",
                    price: "Rs. 400"
                },
                cottonVNeck: {
                    name: "Pure Cotton V-Neck T-Shirt",
                    price: "Rs. 1299"
                },
                greenPlacketDetail: {
                    name: "Green Side Placket Detail T-Shirt",
                    price: "Rs. 1000"
                },
                poloTshirt: {
                    name: "Premium Polo T-Shirts",
                    price: "Rs. 1500"
                },
                cottonNeonGreen: {
                    name: "Cotton Neon Green TShirt",
                    price: "Rs. 800"
                },
                graphicDesign: {
                    name: "GRAPHIC DESIGN MEN T SHIRT - BLUE",
                    price: "Rs. 1389"
                }
            },
            jeans: {
                softStretch: {
                    name: "Soft Stretch Jeans",
                    price: "Rs. 799"
                },
                regularFit: {
                    name: "Regular Fit Straight Jeans",
                    price: "Rs. 1200"
                },
                gruntBlue: {
                    name: "Grunt Blue Slim FitJeans",
                    price: "Rs. 1400"
                }
            }
        },
        kids: {
            dress: {
                sleevesBluePink: {
                    name: "Sleeve Top and Short - Blue and Pink",
                    price: "Rs. 478"
                },
                unicornGown: {
                    name: "Sleeveless Unicorn Patch Gown - Pink",
                    price: "Rs. 1050"
                },
                uullDress: {
                    name: "Cotton Mull Embroidered Dress",
                    price: "Rs. 1190"
                },
                indieMickeyDress: {
                    name: "Blue Cotton Indie Mickey Dress",
                    price: "Rs. 1530"
                },
                maxiFancyDress: {
                    name: "Long Maxi Tulle Fancy Dress Up Outfits -Pink",
                    price: "Rs. 1600"
                },
                unicornPrintDress: {
                    name: "Sleeveless Unicorn Print Fit & Flare Net Dress - Multi",
                    price: "Rs. 1100"
                }
            },
            topsTshirts: {
                printedTop: {
                    name: "Sleeves Printed Top - White",
                    price: "Rs. 499"
                },
                schiffliTop: {
                    name: "Half Sleeves Top Schiffli Detailing - Pink",
                    price: "Rs. 359"
                },
                frozenTops: {
                    name: "Frozen Tops For Kids",
                    price: "Rs. 278"
                },
                topCherry: {
                    name: "Full Sleeves Top Cherry - Pink",
                    price: "Rs. 679"
                },
                printedShoulder: {
                    name: "Printed Off Shoulder Top - White",
                    price: "Rs. 315"
                },
                girlsPandaShirt: {
                    name: "Little Girls Mr. Panda Shirt",
                    price: "Rs. 1200"
                },
                blockedShirt: {
                    name: "Colour Blocked Shirt - Sky Blue",
                    price: "Rs. 849"
                }
            }
        }
    }
}

export default returnedText;