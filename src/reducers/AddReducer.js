import * as types from "../constants/actionTypes"

let product = [
    {id: 1, name: "product A", price: 10, isActive: false, shipping: 'free shipping', url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5azB_EG6ZqYNHMh6_iBmEo2rc3vczNMfxHlAOGi5bXA2LkAFYbg", size: 'S'},
    {id: 2, name: "product B", price: 100, isActive: false,  shipping: 'free shipping', url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZT-t_9ZmRG3QcGdUCMyF9AMdBUykODDxhTjBbd2J_Dt3OpT_hFw", size: 'L'},
    {id: 3, name: "product C", price: 101, isActive: false,  shipping: ' ', url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11K-fYDqFWT3n2mrMnDQfHHDD69yQKLhKOnP9xY6O1numY25qAA", size: 'M'},
    {id: 4, name: "product D", price: 102, isActive: false,  shipping: 'free shipping', url:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDxAPDw8NDw8PEA8PDw8QDQ8PDQ8PFRUXFhURFRUYHSggGBolGxUVITEhJSktLi4uFx8zODMtNygtLisBCgoKDg0OGhAQFy0lHx0rLS0tLi0tLS4tLy8uLSstLS0tLSstLS0tLS0tKystLS0rKzAtLS0tLSstLSstLS0tLf/AABEIAPsAyQMBEQACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQIDBAUGB//EAEQQAAIBAgIGBQgHBgUFAAAAAAABAgMRBCEFBhIxQVETYXGBkQciMkJSobHBIzNygrLR8BQVJFNi4RZzk6LCNENjg5L/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIFBAMG/8QANREBAAIBAgIFCwQDAQEBAAAAAAECAwQRITEFEkFRcSIyM2GBkaGxwdHwExRS4SM0QhXxJP/aAAwDAQACEQMRAD8A9rCQAAAAAAMAAAAAAYDAAAAAAAAAAAAAAAAAAIAAAAAADAAAAAYBYBgAAAAAAAAAAAwAAAAAIAFYSAAAAAGAAAFWIxEKcXKclFLiyt71pHWtO0QmtZtO0MLBabo1ajpptP1HLJT5pdZyYtfhy36lZ/t63096V60w2h2vEgC4DQAAm7Zvct/IDHw+OpVG1CcZWbTtz6ua6zxpqMWSZitonZe2O9eNoZKPZQAADAAgBICAAAVhIAAAAAAI1KkYpyk1FLe27JETMRG8kRvwhodIaywjeNFbb9p5Q8N7MvP0pSvDHxnv7P7/ADi68ektPG3D5ubxeOqVXtTk5PguC7FwMfLmyZp3vO7vpjrSNqwxnK/64nku2+j9ZK1NKMmqsVl519pfe/O534ekc2ONp4x6/u5r6WluMcG4o61Un6VOpHscZL5HbXpbH/1Wfh/TnnR27Jhkx1jw3GU12wfyPWOlNP3z7lP2mRL/ABFhf5jfZCVyf/T038vhKP2mXuY1fWekvQhOT67RX5nlfpXFHm1mfh+e5eujvPOWh0ppqrXyk9mHCEck+3mZmo1mXPwnhHdH173XiwUx8Y5salNxtnmuPWcU893u3eA0/ONlU8+P+/x4mhp+ksuPhfyo+Pv+/vcuTSVtxrwl0WDx1OqvMkm+MXlJdxu4NVizR5E8e7tcGTFannQyToeZhAAAAAAAKwkAAAANgaPSesNOneNP6Sa4+on28e4ztT0jTFPVrxn4R7fs6cWmtfjPCHLY3SFSs71JN8luiuxGJm1GTNPlz7OxoY8VaebDFbPF6FcBXAUo8fEndBxk+Y2G0wmmZ04qCiml/wCSrG+d90ZW4mhh6RvipFIrG0eLmvpa3tNpnmWkNJyrKKcIw2eTk79tzw1GrnNO812Wx4IpO8S18p9ZyugU1xfd+YlC5MhKakRsLKdVp3Ts1x4kcuMGzd4DWCcbKoukjz9dfmaWn6UyY+GTyo+P9+33uTJpK2414fJ0eFxUKsdqEk170+TRu4c9M1etSfz1s+9LUna0Lz2UAAAAAFQSYAAmwOY1k0y03Rpu3Cclv+yjI6Q1k1n9LHz7Z+kOzTYIt5dvY5dyMRootkoK42DuAAO4Ct3APPq8QHd9XiQCKJE0yEpJkCSYEkyBNSI2GZo/HTpS2ovtXBrkeuHNfDfrUn89amTHXJG0uzwGKVWmprK+9XvZ8j6jS6iufHF4/JZGXHOO3VlknQ8wAAAFSCTAQGLpDEdHTlN8Fl2lbTFYmZ5ERMztDznE1HKV3vbu+8+TveclpvPOeLarWKxER2K7lVjAAGgGQEwBMBgADTIEkEmmBJMgSTAlcBwkRMDfau47YqKDfm1Vbsmr28d3gd/Rmf8ATy9SeVvn2e/k5dXj61etHOHWo+lZgCAABKogBIUmBzmteKtFU1xzZn9I5ephmP5cPu6dLTrZN+5xs3n3mBDTF8wHcgFwBMCSYA2AkwJEAArxGIhShKpUkowhFylJ7klxLVpNpitecomYiN5czgfKDgalTo5dNSTdo1KkIqm+1ptx7zuv0ZmrXeNp9UOeurxzOzrUzOdR3AkmBK5AjGRIyHUsotZWfgVjmS9BwFfpKUJ+1FN9vH33PrtPk/UxVv3wxMlepea9zIPZQAAFRCSYFc5WTb4AcHprFdJVk+CyR8/0jl6+Xqxyr8+36NPS06tN+9qPzOJ0oqWY7ELLlUgAAaAGwIpkiy5AGBw/lIxk59BgKKcqmImpyit7inaCfVtXf3TU6NpFetmtyr+T8Pm49XaZ2pHarfk1p9DliKn7Rs77R/Z9vla21brv3Fv/AFbdfzY6vx+3wR+yjbnx+Db+T/G1JYaeGrXVXB1HRkn6Sjm4rus12JHN0hSsZIvXleN3ppbT1erPY6i5wOlJMJSuBC4QsqPzH1WZEc0uy1PxG3QcfYldfZkr/FM3uir745rPZPz/AL3ZusrteJ74b41XGAACohKDYGs07iujpPmzzy5Ix0m09i1K9a0R3uExEt58rvNp3ntbO20bQx1uJSrg8yexC1FUncATAaIA2TAhckWFQwOP1fpftekMVj5Z06UnhsM3/SrSmu78bNLPP6WCuGOc8Z+353OXFHXyTfsjhDsIszXU1GFwnRaQrzWSxNClN8ukpycG/CUTotfrYKx/GZ+PF5RXbJM98fJubnO9UkyobYEJPMmBcs4tdRHalvdRsRapOHtQ98X+TZqdGX6uaY74+Tj1ld6RPdLszeZpgAFDISiwOR1mxW1LZTyWRl9KZNqRTv8AlH9uzR03tNu5zdZmLDvVx3EpVQfnPtLdiq9FVgAICFWvGCvOSim1G7ySbdld8M8u9ExWbcIRMxHNYyqUE8yULCqWt1hxc6dBwpZ4iu+goLd58t8uyMbyb6j309Itfe3KOM/nr5PLLaYrtHOVuitHwwtCnQh6NOKTdrOUvWk+13ZXLlnLebz2rUpFKxWGbBnnK4dJOanxjGUV2ScW/wACG/Db87fujbjukiEpECTYFLeZbbgMmiykpX6t1+jxdPk57Pjl8zq01urmpb1/Pg8c0b47Q9KPqGOYABjshLHxtbYg31ESOC0hU2ptnzWsy/qZpnsjh7mtgp1aR62urHhD1Ri8iRTF+c3zZPYjtZCKrGAlvAjWpRnCUJpShOLjKL3Si1ZomtprO8diJiJjaXIUNK1NGYhYPFzc8LO7wuIlnKnDcoT5pZLq37t2jbDXU4/1cceVHOO/wcsZJxW6l+XZLrosznUuTKparSdaGGhVxta0pUqbVON8oJtJRj/VKWzd9S5Z9GOs5JjFXtn89zyvMVibz2Oc1H1qr4qvUo4hxblF1KTjFRUbNXhlvVnfPPJ5nbrdHTFSLU8J+7n0+e17TFnaxeZlu1cVEbgSTAc3kRHMUwe9lkMiiyspQhLZrxfKSaLcerwQ9Sw1XbhGftJM+pwZf1cdb98MW9eraa9y09lQBjkJazTSewRJDhartJp3TT4nymSk0vNZ7JbVLRaIlj1iITKuTy7iRVDfHtfwLSqySi4ASCEkEvMPKhUbxlOPCOHi0uuU53+C8Dc6LjbFM+tm6yfLiPU3Hk40pVqUnRqRlKnTezSq70rJPopcss13rgjm6Rw1rbrV5zzj6vbSXmY2l3CMt2OQ8p1dxwcIL/uVop9kU5fFI0ejK75Znuhyaudqbetx2oDf7yw9uPTJ9nRTNLX/AOvb2fOHJpvSx7fk9dlvPnWqtTKpIBpgOs7Rb5IRzRKumvN6yZ5kL6ZWUpVKLc4OKbk7JJK7b5e8mvHySe96LoWlOGHpxqemo+cuV23b3n0uixWx4a1sx89otkmYZx1vIAY5CVdampKzIHHawaMs20s+HWuRw63TfqV61fOj4unT5upO08pc3CptXT3r3rmYUw0ondtf8O4uaTVPKSTTdSCyfNXujrroc0xExHP1vC2pxxO27VVsO6c+jl6UJNNXvmkznvWaWmtucPWsxaImFh5rkAk8whNBLzHypUWsVRqcJ0FHvhOV/dJG50XO+OY7p+kM3WR5cT6m68mVFxwk5P1682utKMVfxucvSdt8kR3R93tpI8j2u0RmuxxvlRpt4WlJboV1fq2otfI0ui52yTHfDk1keRHi0HkxwjnjJVbZUaUs/wCqfmpeG0dfSd9sUV75+Tw0dd779z0+aMKGilTZEiTISEwHWfmv9ZCOaJRpyT3MmUr4IqOk1RnFVZRaV3FuLazTW+3dfwO/ou0Rm2nthy6yJ/T39br0fRMwwACmxCUdkCrEYWM1aSA0r1SoOp0l5+leUMtiS9nmlc4L9H47W63HnydEaq8Rs3zR3ud5ppm37VVt7dR++x85rPTX8fo1cHo6sZnK90WShq9KafwuFyrVFtv0aUU51Xfdkt3fY98WmyZfNjh39jzvmrTnK7RGkKuIvKWGq0KdlsOrKKqzf+WvRXayuXFXHwi+8+rl700vNuPV2hia1aAjjqUYOfRzpy2oT2dqyeUk1yfyR6aXUzgtvtvEq5sUZIZOiMFDD0qdCHo042u98nvcn1tts882SclptPanHWKxtDZo8Xqw9MaNp4uhOhUuozSzXpRkndSXYz0w5ZxXi8dil6Res1lj6u6DpYGk6dNucpPanUkkpTluWXBLkX1Ootnt1p9yuLFGONobSR4PVCkxKFrKpJFhalfLmVGTq5o+OIrbEllsSl3rd7zv0FYtniJ7pc2pnbHvDd4nVmovq7Pqby8Ts1PRsX8rFw9XZ/XyeGLVzXhfiydW9F1adZzqU3FQTSba9J8rb8r9R4aDSZKZuteu20fH1L6nPS1NqzzdQbjPMAAqISRACQARYHmOkF/EVvt1fxnzWr9Nbxa2DzK+ChnO9kJEoaDWjR1NYTE1KdOnGqoqs6kYRVRypyU7uVrv0Tr0uW36tYtM7cvfweGakdSZiOLd6PxSrUaVZbqsIT8VdrxObJSaWms9j2pbrVie9ZUZWEypp7y08lYZKKLmAAavTOOxNDz6eHjiKKV57NXYrwte7UWrSXZme+HHjvwtbafg8r2tXjEbx8WPoXWTDYqWzTk4VLX6Gotipa17rg1bPIvm0uTFxnl3wjHmrfk3xxvZEsL6fApI32pULYiplupy/FE0ujOOb2T84cms9H7Xao32aAGAAAFRCTAAACDA820tG2Jr/bl75M+a1nDPbx+kNbB6OPBhs53srkShGpTU4yhLOM4yhJc4tWfuJiZiYmOxExvGzmtQ8S4Rr4GpfpMHUklf1qcpOzXff/6R3a6sTNc0crR8fz5OfTTtE0n/AJdNUOCHTKql6RaeSsMpFFwAwNPrRWfQqhC/SYypHDRtvUZ/WS7FBS9x0aWPL688qxv9vi8s0+T1Y7eDPlRgti0Y2gkoZJuKWStyPHrTO/rX2juZcdxRZFgXUisjq9UKf0lWXKKXi3+RqdERve090Q49bPkx4upRus4wAAAAKiEmAAJgQYHn2sMLYqt1yi/G7PndfXbPPr+0fZqaWf8AHDVs5HurkSg4BLjdbYTwOMo6SpRbhK1LExXFWtn2xW/nFGnpJjNinBbnzj8/ObkzxOO8ZI9rq6GKhWpwq05KUKkVKL5p/B9RnWpNLTW3OHTFotG8Ck/OE8iObKRRcwADmdFV/wBtx9TExalh8JF4eg1mp1ZWdSon2ZdjR3Za/o4YpPnW4z4dkOak/qZJt2Rwh0VXccUOiVlGV0RJCUiISnSZEjs9UV9c+umvxGr0PHG8+H1cOu/59v0dGjbcAAYAAAVEJMAAGBWwOC1mX8TU+58GYXScf5Ynvho6OfImPW08jPdSqZaEJQIlKrH4OnXpzo1Y7UKi2ZL4NcmnmuwtjvNLRavOEWrFo2l57hMdX0NXlh66lUws25QkuX8yHXzj+nsXx01lOvThaPzafpLgra2C3Vtydxo7GU66VSlOM4O3nL4Nb0+pmVkx2pPVtG0uylotxhsTxepgcbrVrG6sv3fgXt16r6OdSLygvWgpc7b3wV+O7T0ulisfrZuERx/Po482bef06c5dLoTRkMJh6dCGewvOla23N5yl4nDnyzlvN57XRjpFKxWGZLceULo0Xm0TKIXSKwslR3iR3GqcbQqPnKPw/ua/REeTefXDP1s8at8jYcRgADAAKiEgBgJgQYHC60L+In1qP695i9KR5VJ8fo79FPCfY0cjMdiqRZEpxIlKZA12mNHUsTTdKtHai8090oy9qL4M9sOW2K3WrLzyUi8bS8/xWrWPwVR1MHOc486b2atuUoet3XNiurwZq7ZY28fv2OGcGTHO9AtddJUvMqRhtbvpcPKM/c18B+w09+NZ4eqT9zlrwn5JPE6Z0j5iVSFOWUtmHQUbdct7XVmRFNJp+M8/fJ1s+Xw9zsNV9WKeBi5NqpXkrTqWsor2YLguviZ2q1ds87cojs+7sw4Ix+Lfo43sTAq3SRbsR2sllFhS3iR32rEbUpPnP/jE2eiPRW8fpDO1vnx4N0azjMAAAACshIAAACDA4jWtfTvs/IyOlY8yfH6O3RdrQMyXcqZaEJxISkQKapaESph6RbsV7WZGT5vxPPZcMAAAGEqqhaFZXxd0VSKe8ieQ9B1ZX0CfOXyRudFR/gnxlm6z0nsbc03KYDAAC4FZCQAADArYHFa1/XPsMrpSPIrPrdmjnyp8HPyMh3qWShZEhKRApqloRKiPpFp5K9rLiUXSIAAAMJV1CYVlKg8iJTCcd4nkl6Lq4v4aHXd+/wDsb3Rcf/njxn5svV+ln2NojQcxgAAAwKiEgBgJgQYHFa2fXdxmdJ+jjx+kuvR+dPg56ZjQ0JVslCyO4hJkCiqWhWVC9JF+xXtZkTzl6GyAwEiQyBGZMEo4d5tEyiF8d5WeSz0TV1/wtLsl+Jn0HRv+tX2/OWVqvSz7Pk2Z3OcwGAAAFZCQAADAgwOK1r+t/XIzek/Rx4/SXXpPPnw+znpmLDQVSJQtRCTIGPVLwrLH9ZFuxXtZsTzeiRAABAMBSJFVN+cTPJEMlbyizv8AVaV8NHqlNe+/zN/ov/X9ssvV+l9kNwaDmMBgAABWQkAACYEGBxWtMvpX3fAy+k/Rx4/SXZo/Onwc/Mx3era3EoWoqkAY1QvCsqJeku0sqzIlJXTISCAIkMgEiRQ8mmSqyob0UXd7qr/0seuU37zf6M9B7ZZer9J7IblGg5jQDAAGBUQkwABMCDA4fWd/SvtMrpPzK+Lt0fnS0UjIdyuXDtJQtRVIJGNVLQrLHlvRZXtZsdxSVzTIDQSaAZCTJFFREwrK+g72KymHoOrCthafbP8AEzf6M/148Z+bL1fpZ9nybdHe5zQDAAACshYAACYEGEOG1kf0z7X8jK6T82vi7dHzlpZGQ7lUyYQtKrBkoY9UtCssee9FlZ5synuKSvB2ISaAaAZAkEqahaFZSw5FiHpWgobOGpL+m/i2/mfRaCu2np4b/Flaid8tmwOt4pAAAwACsqsZIAEwIMhDhdYo/TPtfyMrpTza+Mu3R85aeSMh3KZ/MtCFtiqxgUVUWhWVEo5otE8FWVBFJXgwGAIgSRKTIFc0TCBQ3+AsiHp+jFahS/y4fBH0ul9BTwhkZvSW8ZZUT2jmokiyDAAACsqsCQADAgQhxmslP6Vv9bjM6Tj/ABxPr+7s0c+V7GinExYaCqcd3ai0IlcVSP7gY0ol1ZVuFmnvXvJRsvhMrssmprqI2DQBZBJqwAwISQQVNZi08CHqODVqdNcoQXuR9TgjbHWPVHyY2Sd7z4shHqoAGAwACsqsAAkDAjYgafS+iHWd4tJ24o59Vg/WxzWPU9MOT9O27U1NVanCpBv7LRnR0Vf+ce51fvK/xY09WMQt2w/vNfIpbo3NHKY/PYtGsx9u54XVvEbcduKUbraltp2XHLfcrHR2beImI28Uzq8e3BvY6sYTjCb63Vlf3Gh/52Dun3y5f3WXv+BPVbC+zUX/ALJE/wDn4O6ffJ+6y9/wVVNUsO9zqr7yfyKz0dh7N/emNXk9TCqaoezW7nTv8Gec9F17L/D/AOLxrJ7asapqpVXozhLuaPKei7dl4939rxrI7asaWrmIXqRfZJfM8Z6Ozx3e9eNXjVvQeJ/lS8V+ZSdFnj/n4wvGox9/zL9yYr+VP/aV/Z5/4fL7n7jH3j90YnjRqeA/ZZ/4T8Pun9xj/krnovELN0av+nJlbabNHOk+77JjNjn/AKhQqTT86Ml2ppnheJrHlRt4vSsxPJ6ZhvQh9iPwR9Vi9HXwj5MW/nT4rUeipgMAAAIFVgAAAAAggWBsRILAOwAAwkrBA2QDZCBYA2QE4gNRAjKhBq0oxknvTimvBkWrFo2mN4TEzHJYkWQYAAAMAIFZCxgCAAAAAQASgAMJAAEAAAYAAAAAEAkMAAAAAIAQl//Z", size: 'M'},
    {id: 5, name: "product E", price: 104, isActive: false,  shipping: ' ', url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRth_snzfZIyh-KSjbcU8Y9F8v6DHMyGkuTsAqzLFwto-gKC4Ea6A", size: 'L'},
    {id: 6, name: "product F", price: 104, isActive: false,  shipping: 'free shipping', url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo2HpgXQnRxIt1s6HTdEV8W15EdFp67oNidUxlsZHydoYUgY_MBg", size: 'XXL'},
    {id: 7, name: "product G", price: 102, isActive: false,  shipping: ' ', url:"data:image/jpeg;base64,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", size: 'XL'},
    {id: 8, name: "product H", price: 108, isActive: false,  shipping: 'free shipping', url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jhYVUp5wIVaLtxqVkvGqerYGkjkfDQ3MXik_WJluAb1Tc8tG", size: 'S'}
];


let products = product.map(value => {
    value.count = 0;
    return value;
})

const initialState = {      
    selectedSize: [],
    products : products,
    sizes: [
        {id: 1, size: 'S', isActive: false},
        {id: 2, size: 'M', isActive: false},
        {id: 3, size: 'L', isActive: false},
        {id: 4, size: 'XL', isActive: false},
        {id: 5, size: 'XXL', isActive: false},
    ],
    sortby: [
        {id: 1, option: 'high to low', name: 'High to Low'},
        {id: 2, option: 'low to hign', name: 'Low to High'},
    ],
    filteredArray: products,
    text: 0,
    selectedValue: '',
    count: 0,
    itemsInCart : [],
    cartItems: [],
    totalCount: 0,
    totalAmount: 0,
}

//   ​Reducer corresponding to AddAction.js
export default (state = initialState, action) => {
    switch (action.type) {

        case types.SIZE_FILTER:
            const { selectedSize } = state;
            action.data.isActive = !action.data.isActive
            if (selectedSize.indexOf(action.data.size) < 0) {
                selectedSize.push(action.data.size);
                const filteredData = state.products.filter(item =>(selectedSize.indexOf(item.size) !== -1))
                return {
                    ...state,
                    selectedSize :  ([...selectedSize]),
                    filteredArray: ([...filteredData])
                };
                
            }
            else {
                let filteredData;
                selectedSize.splice(selectedSize.indexOf(action.data.size), 1);
                if (selectedSize.length) {
                    filteredData = state.products.filter(item =>(selectedSize.indexOf(item.size) !== -1))
                } else {
                    filteredData = state.products;
                }
                return {
                    ...state,
                    selectedSize :  ([...selectedSize]),
                    filteredArray: ([...filteredData])
                };
                
            }

        case types.PRICE_FILTER:
            const selectedValue = action.data.target.value;
            const pricefilteredData = (selectedValue === "high to low" ? state.filteredArray.sort((a,b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0)): state.filteredArray.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0)))
            return {
                ...state,
                filteredArray: ([...pricefilteredData])
            };

        case types.CLEAR_FILTER:
            state.sizes.map(item => {
                return item.isActive = false;
            })
            return {
                ...state,
                filteredArray: state.products
            };

        case types.ADD_AND_DELETE_CART:
            const { cartItems, totalCount} = state;
            const index = cartItems.findIndex(item => item.id === action.data.id);
            if(index < 0) {
                action.data.isActive = true;
                action.data.count = action.data.count + 1
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.data],
                    totalCount: totalCount + action.data.count,
                };
            }
            else {
                action.data.isActive = false;
                const count = totalCount - action.data.count
                action.data.count = 0
                cartItems.splice(index, 1)
                return  {
                    ...state,
                    cartItems: [...cartItems],
                    totalCount: count
                }
            }

        case types.UPDATE_PROD_COUNT:
            let totalProductsInacart = state.cartItems.map(item => item.count).reduce((prev, next) => prev + next);
            let totalAmountsTobePaid = state.cartItems.map(item => item.price * item.count).reduce((prev, next) => prev + next);
            if (action.data.type === 'increment') {
                action.data.item.count = action.data.item.count + 1 ;
                totalProductsInacart = totalProductsInacart + 1
                totalAmountsTobePaid = totalAmountsTobePaid + action.data.item.price
            } else {
                action.data.item.count = action.data.item.count - 1 ;
                totalProductsInacart = totalProductsInacart - 1
                totalAmountsTobePaid = totalAmountsTobePaid - action.data.item.price
            }
            return {
                ...state,
                cartItems: [...state.cartItems],
                totalCount: totalProductsInacart,
                totalAmount: totalAmountsTobePaid
            }

        case types.FREE_SHIPPING:
            const freeShippingFilteredData = state.filteredArray.filter(item => item.shipping === "free shipping")
            return {
                ...state,
                filteredArray: ([...freeShippingFilteredData]),
            }

        default:
            return {
                ...state
            };
    }
}