import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk"; // no changes here 😀

const initialState = {
  loading: false,
  error: false,
  modules: []
};

function AJAXLoader(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "LOAD_START":
      return {
        ...state,
        loading: true
      };
    case "LOAD_ERROR":
      return {
        ...state,
        error: true,
        loading: false
      };
    case "LOAD_SUCCESS":
      const newState = {
        ...state,
        error: false,
        loading: false,
        modules: action.data && action.data.modules ? action.data.modules : state.modules
      };
      return newState;
    default:
      return state;
  }
}

export const store = createStore(AJAXLoader, applyMiddleware(ReduxThunk));

export const loadData = () => dispatch => {
  console.warn("REMOVE IT");
  dispatch({
    type: "LOAD_SUCCESS",
    data: {
      modules: [
        {
          id: "5d62e65a2a26f4afba6f4bfa",
          guid: "3d5e465a-78c5-4b4b-abc9-2cf15d075066",
          isActive: false,
          title: "Module 1",
          order: 582,
          lessons: [
            {
              id: "5d62e65afe5a1085cb7ae144",
              guid: "b40c9cfd-2423-4de7-a02e-f5ca7da81a45",
              isActive: false,
              title: "Lesson 1",
              order: 471
            },
            {
              id: "5d62e65a5891db915f728926",
              guid: "5bf78132-50fb-4776-b9bd-b1d7db00ff85",
              isActive: false,
              title: "Lesson 2",
              order: 401
            },
            {
              id: "5d62e65ad5f78c564aab2b74",
              guid: "7611bb2f-9983-4dad-964e-f1173a056112",
              isActive: false,
              title: "Lesson 3",
              order: 230
            },
            {
              id: "5d62e65a86cbcb2878c436ee",
              guid: "8c6ac9a8-8671-4042-b9a5-869dc23b6421",
              isActive: true,
              title: "Lesson 4",
              order: 598
            },
            {
              id: "5d62e65ae793c2b7dd322add",
              guid: "234ac7ff-2059-4742-8b5b-e3eb214c2b2e",
              isActive: false,
              title: "Lesson 5",
              order: 600
            }
          ]
        },
        {
          id: "5d62e65a7ae950c95888d6f2",
          guid: "fe01f196-5e28-4626-bee0-29a49b6c9a4f",
          isActive: true,
          title: "Module 2",
          order: 813,
          lessons: [
            {
              id: "5d62e65ab36656e9f27b981f",
              guid: "f6c03169-7c0e-4eef-a207-0a9f5d0f79fe",
              isActive: false,
              title: "Lesson 1",
              order: 809
            },
            {
              id: "5d62e65a4ad3b6dbd007a412",
              guid: "6a4dbfe3-7784-4e53-8a2f-32b5ffac17f9",
              isActive: true,
              title: "Lesson 2",
              order: 901
            },
            {
              id: "5d62e65ace0887310becfb79",
              guid: "53beb3fe-9df6-4bfc-ba9c-3787665a78c2",
              isActive: true,
              title: "Lesson 3",
              order: 709
            }
          ]
        },
        {
          id: "5d62e65a196733cf5c22caac",
          guid: "26aa4d0c-81ab-4f19-8629-e0f1883b6ef9",
          isActive: true,
          title: "Module 3",
          order: 4,
          lessons: [
            {
              id: "5d62e65a9b7455b9432bc8c0",
              guid: "37d4b71a-48c4-493f-a4ba-8f3011482e0b",
              isActive: false,
              title: "Lesson 1",
              order: 580
            },
            {
              id: "5d62e65a5406cfd0a6fcef20",
              guid: "0b599aa0-3436-475a-a887-d6dfaf24b70a",
              isActive: true,
              title: "Lesson 2",
              order: 137
            },
            {
              id: "5d62e65ae9c5ad2f4db958c9",
              guid: "cf259d79-b077-4b72-b79e-965381232747",
              isActive: false,
              title: "Lesson 3",
              order: 717
            }
          ]
        },
        {
          id: "5d62e65a74bc86d73dfc8ba6",
          guid: "96e3b7ee-591f-4529-af6f-292d11e6a147",
          isActive: true,
          title: "Module 4",
          order: 533,
          lessons: [
            {
              id: "5d62e65a0e8736c14c46ae37",
              guid: "c4a4ef23-d69a-42b8-8d5c-93b3b5339807",
              isActive: true,
              title: "Lesson 1",
              order: 507
            },
            {
              id: "5d62e65a891d67a214243980",
              guid: "dd769a32-1b9b-4715-a841-5dda591aa827",
              isActive: false,
              title: "Lesson 2",
              order: 757
            },
            {
              id: "5d62e65aa9e526e30588729b",
              guid: "f56c2e68-4711-41f9-9db1-a26e89f4aaf9",
              isActive: true,
              title: "Lesson 3",
              order: 514
            }
          ]
        },
        {
          id: "5d62e65a7ecec88cd6945c9c",
          guid: "5b4da287-394b-4a43-a414-a66c421d59a7",
          isActive: true,
          title: "Module 5",
          order: 37,
          lessons: [
            {
              id: "5d62e65a28e8d30494613b66",
              guid: "cc389d5e-9c43-43f6-bc91-b3862d556894",
              isActive: true,
              title: "Lesson 1",
              order: 109
            },
            {
              id: "5d62e65ac05e1b60ef252217",
              guid: "82ad03e3-ca36-4cdd-91fd-fb8575a946d7",
              isActive: true,
              title: "Lesson 2",
              order: 559
            },
            {
              id: "5d62e65a95b33f5a49a3fdb3",
              guid: "1bb196be-7f8f-4cd3-bd8c-9336b2ceb882",
              isActive: true,
              title: "Lesson 3",
              order: 653
            },
            {
              id: "5d62e65a7f00946cae43dbcd",
              guid: "e62ce734-5830-4773-9fa1-d15e833c9ab5",
              isActive: false,
              title: "Lesson 4",
              order: 402
            },
            {
              id: "5d62e65ab255018f9eb17a2d",
              guid: "c19c4480-c157-496f-b73c-2f57e403e712",
              isActive: false,
              title: "Lesson 5",
              order: 189
            }
          ]
        },
        {
          id: "5d62e65a0279a65bb163f2ad",
          guid: "540b4e1c-3b4d-4c30-a7f3-c2ae73886002",
          isActive: true,
          title: "Module 6",
          order: 510,
          lessons: [
            {
              id: "5d62e65a8512891ffd664da5",
              guid: "d83e4477-0906-4d19-8050-a59caf7f5da7",
              isActive: true,
              title: "Lesson 1",
              order: 100
            },
            {
              id: "5d62e65aa97b292c4865450c",
              guid: "e1c984ed-2fc6-471c-9b4f-2f532412a172",
              isActive: true,
              title: "Lesson 2",
              order: 836
            },
            {
              id: "5d62e65a6b4eb7fa76af7f8c",
              guid: "c9e77a37-9fb6-485e-9f0d-24eb57403a82",
              isActive: true,
              title: "Lesson 3",
              order: 630
            },
            {
              id: "5d62e65ab0fd4f47fb58df93",
              guid: "3cbe99a4-3346-46d7-a2a7-155585319018",
              isActive: false,
              title: "Lesson 4",
              order: 248
            }
          ]
        },
        {
          id: "5d62e65aef0309810c6bdea6",
          guid: "9550761b-adbd-4027-93dc-52dafa098284",
          isActive: true,
          title: "Module 7",
          order: 87,
          lessons: [
            {
              id: "5d62e65a9e6aec5312bf4f3e",
              guid: "d8a9221a-2498-4dbd-82c0-b9b4b5f10b47",
              isActive: true,
              title: "Lesson 1",
              order: 2
            },
            {
              id: "5d62e65a777495c00541650b",
              guid: "c69593fd-b83e-4ead-bf40-77653467db62",
              isActive: false,
              title: "Lesson 2",
              order: 415
            },
            {
              id: "5d62e65ae317e18a50a390a9",
              guid: "399c09a0-286b-4353-a5d0-fefd69a3c1ac",
              isActive: false,
              title: "Lesson 3",
              order: 275
            }
          ]
        }
      ]
    }
  });
  return;
  dispatch({ type: "LOAD_START" });
  return fetch(
    "https://sifivelearn-production.s3-us-west-1.amazonaws.com/samples/fe-developer.json"
  )
    .then(response => response.json())
    .then(data => dispatch({ type: "LOAD_SUCCESS", data }))
    .catch(() => dispatch({ type: "LOAD_ERROR" }));
};
