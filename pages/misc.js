/*

<div>Business Degrees</div>
        <div className={styles.grid}>
          {information && information.map((info, index) => {

            if(info.department.toLowerCase() === "business") {                      
            return (
              <Card key={index} degree={info.degree} colour="red" font="10px"/>
              )

            }

          })}


        </div>
        <div>Computing Degrees</div>

        <div className={styles.grid}>
          {information && information.map((info, index) => {

            if(info.department.toLowerCase() === "computing") {                          
            return (
              <Card key={index} degree={info.degree} colour="blue" font="10px"/>
              )
              
            }
            
          })}

*/