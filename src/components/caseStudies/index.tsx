import Mosaic from "./mosaic";
import twitter1 from "../../assets/images/twitter-1.png";
import twitter2 from "../../assets/images/twitter-2.png";
import twitter3 from "../../assets/images/twitter-3.png";
import twitter4 from "../../assets/images/twitter-4.png";

export default function CaseStudies() {
	return (
		<section className="relative w-full">
			<div className="relative items-center w-full px-5 py-12 mx-auto lg:py-32 md:px-12 lg:px-16 max-w-7xl">
				<div className="flex w-full mx-auto text-left">
					<div className="relative inline-flex items-center m-auto align-middle">
						<div className="max-w-3xl space-y-8 lg:text-center">
							<h2 className="mb-4 text-4xl font-bold leading-none text-white lg:text-6xl">
								Hear the community
							</h2>
							<p className="mb-6 text-xl font-light text-santa">
								See what the community is saying about LangFlow.
							</p>
						</div>
					</div>
				</div>

				<div className="py-6 lg:py-12">
					<div className="max-w-xl mx-auto lg:max-w-7xl">
						<h2 className="sr-only">Hear the community</h2>
						<dl className="grid grid-cols-2 gap-4">
							<Mosaic image={twitter1} delay={0} />
                            <Mosaic image={twitter2} delay={300} />
                            <Mosaic image={twitter3} delay={600} />
                            <Mosaic image={twitter4} delay={900} />
						</dl>
					</div>
				</div>
			</div>
		</section>
	);
}
