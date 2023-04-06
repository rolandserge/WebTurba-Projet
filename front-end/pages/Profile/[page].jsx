// import React from 'react';

// const page = () => {



//      return (
//           <div className='profile_page'>
//           <header>
//           <Navbar height={700} width={{ sm: 300 }} p="md" className={classes.navbar}>
//                     <Navbar.Section className={classes.section}>
//                     {/* <UserButton
//                          image="https://i.imgur.com/fGxgcDF.png"
//                          name="Bob Rulebreaker"
//                          email="Product owner"
//                          icon={<IconSelector size="0.9rem" stroke={1.5} />}
//                     /> */}
//                     </Navbar.Section>

//                     <TextInput
//                     placeholder="Search"
//                     size="xs"
//                     icon={<IconSearch size="0.8rem" stroke={1.5} />}
//                     rightSectionWidth={70}
//                     rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
//                     styles={{ rightSection: { pointerEvents: 'none' } }}
//                     mb="sm"
//                     />

//                     <Navbar.Section className={classes.section}>
//                         <div className={classes.mainLinks} onClick={() => setContent('livre')}>
//                               <UnstyledButton className={classes.mainLink}>
//                             <div className={classes.mainLinkInner}>
//                               <div className={classes.mainLinkIcon}>
//                                 <MdLibraryBooks />
//                               </div>
//                               <p className='theme'>Mes livres crées</p>
//                           </div>
//                             <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
//                               {  FilterDataLivre() ? FilterDataLivre().length : 'Loading ...'}
//                             </Badge>
//                           </UnstyledButton>
//                         </div>
//                         <div className={classes.mainLinks} onClick={() => setContent('creer')}>
//                                   <UnstyledButton className={classes.mainLink}>
//                             <div className={classes.mainLinkInner}>
//                               <div className={classes.mainLinkIcon}>
//                                 <BiBookAdd />
//                               </div>
//                               <p className='theme'>Creer un livre</p>
//                           </div>
//                             <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
//                               50
//                             </Badge>
//                           </UnstyledButton>
//                         </div>
//                         <div className={classes.mainLinks} onClick={() => setContent('commenter')}>
//                                   <UnstyledButton className={classes.mainLink}>
//                             <div className={classes.mainLinkInner}>
//                               <div className={classes.mainLinkIcon}>
//                                   <BiCommentCheck />
//                               </div>
//                               <p className='theme'>Les livres commentés</p>
//                           </div>
//                             <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
//                               { FilterDataLivreCommenter() ? FilterDataLivreCommenter().length : "Loading ..." }
//                             </Badge>
//                           </UnstyledButton>
//                         </div>
//                         <div className={classes.mainLinks} onClick={() => setContent('stats')}>
//                                   <UnstyledButton className={classes.mainLink}>
//                             <div className={classes.mainLinkInner}>
//                               <div className={classes.mainLinkIcon}>
//                                 <TbChartInfographic />
//                               </div>
//                               <p className='theme'>Mes Statitisques</p>
//                           </div>
//                             <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
//                               12
//                             </Badge>
//                           </UnstyledButton>
//                         </div>
//                     </Navbar.Section>

//                     <Navbar.Section className={classes.section}>
//                     <Group className={classes.collectionsHeader} position="apart">
//                          <Text size="xs" weight={500} color="dimmed">
//                          Categories
//                          </Text>
//                          <Tooltip label="Create collection" withArrow position="right">
//                          <ActionIcon variant="default" size={18}>
//                          <IconPlus size="0.8rem" stroke={1.5} />
//                          </ActionIcon>
//                          </Tooltip>
//                     </Group>
//                     {/* <div className={classes.collections}>{collectionLinks}</div> */}
//                     </Navbar.Section>
//                </Navbar>
//           </header>
//          <section>
//           {
//             content === "livre" && <LivreUser livres={FilterDataLivre()} /> }
//            { content === "creer" && <AddLivre /> }
//            { content === "commenter" &&  <LivreUser livres={FilterDataLivreCommenter()} />}
//            { content === "stats" && <Livres /> }
          
//          </section>
//         </div>
//      );
// };

// export default page;